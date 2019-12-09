export class NodeTree {
  readonly id: string;
  readonly name: string;
  readonly value: any;
  private path: any | null;
  private parent: any | null;
  private children: NodeTree[];

  constructor(name: string, value: any, id: string) {
    this.name = name;
    this.value = value;
    this.id = id;
    this.parent = null;
    this.children = [];
  }

  getParent() {
    return {
      id: this.parent.id,
      name: this.parent.name,
      value: this.parent.value
    };
  }

  getChildren() {
    return this.children;
  }

  addParent(parent: NodeTree) {
    const p = Object.assign({}, parent);
    this.parent! = { id: p.id, name: p.name, value: p.value };
    return this;
  }

  addChild(child: NodeTree) {
    this.children!.push(child);
    return this;
  }

  parentIsRoot() {
    return this.parent === 'root';
  }
}
