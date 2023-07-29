import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class ChallengeLeverage extends Entity {
  constructor() {
    super();
  }

  async getAll() {
    return await this.handlePost(`${BASE_URL}/u/challenge_leverages`);
  }

  async get(id) {
    return await this.handlePost(
      `${BASE_URL}/u/challenge_leverages/show/${id}`
    );
  }

  async store(value, free, real) {
    return await this.handlePost(`${BASE_URL}/a/challenge_leverages/store`, {
      value,
      free,
      real,
    });
  }

  async update(id, value, free, real) {
    return await this.handlePost(
      `${BASE_URL}/a/challenge_leverages/update/${id}`,
      {
        value,
        free,
        real,
      }
    );
  }
}
