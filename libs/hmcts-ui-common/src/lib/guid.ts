import { v4 as uuidv4 } from 'uuid';

class UUID {
  constructor(public uuid: string) {
    this._uuid = uuid;
  }

  private _uuid: string;
  // Static
  static generateNew(): string {
    return uuidv4();
  }

  public toString(): string {
    return this.uuid;
  }

}