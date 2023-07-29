import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class ChallengePlatform extends Entity {
  constructor() {
    super();
  }

  async getAll() {
    return await this.handlePost(`${BASE_URL}/u/challenge_platforms`);
  }

  async get(id) {
    return await this.handlePost(
      `${BASE_URL}/u/challenge_platforms/show/${id}`
    );
  }

  async store(value, free, real) {
    return await this.handlePost(`${BASE_URL}/a/challenge_platforms/store`, {
      value,
      free,
      real,
    });
  }

  async update(id, value, free, real) {
    return await this.handlePost(
      `${BASE_URL}/a/challenge_platforms/update/${id}`,
      {
        value,
        free,
        real,
      }
    );
  }
}
