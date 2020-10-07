export class Category {
  private id: string;

  private pid: string;

  private name: string;

  private children: Category[];

  constructor(id: string, name: string, pid: string) {
    this.id = id;
    this.name = name;
    this.pid = pid;
    this.children = [];
  }

  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof Category
   */
  get catId(): string {
    return this.id;
  }

  get catPid(): string {
    return this.pid;
  }

  get catName(): string {
    return this.name;
  }

  get catChildren(): Category[] {
    return this.children;
  }

  /**
   * add a new child category
   *
   * @param {Category} c
   * @memberof Category
   */
  addChild(c: Category): void {
    this.children.push(c);
  }
}
