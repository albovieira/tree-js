import { NodeTree } from './node';

export class Tree {
  private root: NodeTree;

  constructor() {
    this.root = new NodeTree('root', null, 'root');
  }

  show() {
    return this.root;
  }

  add(name: string, value: any, id: string, parent?: Partial<NodeTree>) {
    const child = new NodeTree(name, value, id);
    const rootChildren = this.root.getChildren();

    if (!parent) {
      const node = this.transverseByNodeName(rootChildren, name, value, id, parent);
      if (node) {
        return this;
      }
      child.addParent(this.root);
      this.root.addChild(child);
      return this;
    }

    const node = this.transverseByNodeName(rootChildren, name, value, id, parent);
    if (node) {
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

  transverseByParent(nodes: NodeTree[], parent: Partial<NodeTree>) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.name === parent.name && node.value === parent.value && node.id === parent.id) {
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
    value: string,
    id: string,
    parent: Partial<NodeTree>
  ) {
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
      if (n) return n;
    }
    return null;
  }
}
