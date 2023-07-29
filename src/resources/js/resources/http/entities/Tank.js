import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Tank extends Entity {
  constructor() {
    super();
  }

  async getTank(id) {
    return await this.handlePost(`${BASE_PATH}/a/tanks/show/${id}`);
  }

  async getAllTanks() {
    return await this.handlePost(`${BASE_PATH}/a/tanks`);
  }

  async storeTank(name, family, nationalCode, mobile, tankNum) {
    return await this.handlePost(`${BASE_PATH}/a/tanks/store`, {
      name,
      family,
      national_code: nationalCode,
      mobile,
      tank_num: tankNum,
    });
  }

  async deleteTank(id) {
    return await this.handlePost(`${BASE_PATH}/a/tanks/delete/${id}`);
  }
}
