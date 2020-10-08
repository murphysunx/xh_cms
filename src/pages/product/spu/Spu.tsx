export class Spu {
  readonly id: number;

  readonly cid: number;

  readonly name: string;

  desc: string;

  constructor(id: number, name: string, desc: string, cid: number) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.cid = cid;
  }
}
