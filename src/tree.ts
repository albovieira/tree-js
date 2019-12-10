import { NodeTree } from './node';
import { RawNode } from './raw-node';

export class Tree {
  private root: NodeTree;

  constructor() {
    this.root = new NodeTree('root', 'root', null, null);
  }

  get() {
    return this.root;
  }

  build(rawNodes: any[]): NodeTree {
    const normalizedNodes = rawNodes.map(this.normalize);
    normalizedNodes.forEach(nodes => {
      nodes.forEach((node, key) => {
        const parent = nodes[key - 1] || null;
        this.add(node, parent);
      });
    });

    return this.root;
  }

  add(
    node: Partial<NodeTree>,
    parent?: Partial<NodeTree>
  ) {
    const { id, name, value, path } = node;
    const child = new NodeTree(id, name, value, path);
    const rootChildren = this.root.getChildren();

    if (!parent) {
      const nodeFound = this.transverseByNodeName(
        rootChildren,
        name,
        value,
        id,
        parent
      );
      if (nodeFound) {
        return this;
      }
      child.addParent(this.root);
      this.root.addChild(child);
      return this;
    }

    const nodeFound = this.transverseByNodeName(
      rootChildren,
      name,
      value,
      id,
      parent
    );
    if (nodeFound) {
      return this;
    }
    const parentNode = this.transverseByParent(rootChildren, parent);

    child.addParent(parentNode);
    parentNode.addChild(child);

    if (name === 'ranking') {
      console.log(`apply ranking: ${child.value}`);
    }

    return this;
  }

  transverseByParent(nodes: NodeTree[], parent: Partial<NodeTree>): NodeTree | null {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (
          node.name === parent.name &&
          node.value === parent.value &&
          node.id === parent.id &&
          node.path === parent.path
      ) {
        return node;
      }
      if (node.getChildren().length > 0) {
        const n = this.transverseByParent(node.getChildren(), parent);
        if (n) return n;
      }
    }
    return null;
  }

 transverseByNodeName(
    nodes: NodeTree[],
    name: string,
    value: any,
    id: string,
    parent: Partial<NodeTree>
  ): NodeTree | null {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (parent) {
        if (
          node.name === name &&
          node.value === value &&
          node.id === id &&
          (node.getParent() || {}).id === (parent || {}).id &&
          (node.getParent() || {}).name === (parent || {}).name &&
          (node.getParent() || {}).value === (parent || {}).value
        ) {
          return node;
        }
      } else if (node.name === name && node.value === value) {
        return node;
      }
      const n = this.transverseByNodeName(
        node.getChildren(),
        name,
        value,
        id,
        parent
      );
      if (n) {
        return n;
      }
    }
    return null;
  }

  normalize(nodes: any[]): NodeTree[] {
    return nodes.map((node, key) => {
      node.id = `${node.airline}-${node.name}-${node.value}`;
      const beforeNode = nodes[key-1];
      if(beforeNode) {
        node.path = `${beforeNode.path}~${node.id}`;
      } else {
        node.path = `${node.id}`;
      } 
      return node;
    });
  }
}
