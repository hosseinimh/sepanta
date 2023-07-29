import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class AppRule extends Entity {
  constructor() {
    super();
  }

  async getAll() {
    return await this.handlePost(`${BASE_URL}/u/app_rules`);
  }

  async get(id) {
    return await this.handlePost(`${BASE_URL}/u/app_rules/show/${id}`);
  }

  async store(title, body) {
    return await this.handlePost(`${BASE_URL}/a/app_rules/store`, {
      title,
      body,
    });
  }

  async update(id, title, body) {
    return await this.handlePost(`${BASE_URL}/a/app_rules/update/${id}`, {
      title,
      body,
    });
  }
}
