export class Category {
  readonly id: number;

  pid: number | null;

  name: string;

  readonly children: Category[] = [];

  constructor(id: number, pid: number | null, name: string) {
    this.id = id;
    this.pid = pid;
    this.name = name;
  }

  static create(api: ICategoryAPI) {
    const { cat_id, parent_id, cat_name } = api;
    return new Category(cat_id, parent_id, cat_name);
  }

  addChild(cat: Category): void {
    this.children.push(cat);
  }
}

export interface ICategoryAPI {
  cat_id: number;
  parent_id: number | null;
  cat_name: string;
}
