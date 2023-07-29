import Entity from "./Entity";

export class MetaApi extends Entity {
  constructor() {
    super();
    this.basePath = "https://toptradersfunfing.com";
  }

  async get(token, accountId) {
    return await this.handlePost(
      `${this.basePath}`,
      {
        type: "forex",
        token,
        accountId,
      },
      false
    );
  }
}
