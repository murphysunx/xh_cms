export class Spu {
  readonly id: number;

  readonly cid: number;

  name: string;

  desc: string;

  constructor(id: number, name: string, desc: string, cid: number) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.cid = cid;
  }

  static create(api: ISpuAPI) {
    const { pdt_id, pdt_name, pdt_desc, cat_id } = api;
    return new Spu(pdt_id, pdt_name, pdt_desc, cat_id);
  }
}

export interface ISpuAPI {
  pdt_id: number;
  pdt_name: string;
  pdt_desc: string;
  cat_id: number;
}
