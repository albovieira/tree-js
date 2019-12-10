export class NodeTree {
  readonly id: string;
  readonly name: string;
  readonly value: any;
  readonly path: any | null;
  private parent: any | null;
  private children: NodeTree[];

  constructor(id: string, name: string, value: any, path: string | null) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.path = path;
    this.parent = null;
    this.children = [];
  }

  getParent() {
    return {
      id: this.parent.id,
      name: this.parent.name,
      value: this.parent.value,
      path: this.parent.path
    };
  }

  getChildren(): NodeTree[] {
    return this.children;
  }

  addParent(parent: NodeTree) {
    const p = Object.assign({}, parent);
    this.parent! = { id: p.id, name: p.name, value: p.value, path: p.path };
    return this;
  }

  addChild(child: NodeTree) {
    this.children!.push(child);
    return this;
  }

  parentIsRoot(): boolean {
    return this.parent === 'root';
  }
}
