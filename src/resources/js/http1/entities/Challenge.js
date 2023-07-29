import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class Challenge extends Entity {
  constructor() {
    super();
  }

  async getPaginate(_pn = 1, _pi = PAGE_ITEMS) {
    return await this.handlePost(`${BASE_URL}/a/challenges`, {
      _pn,
      _pi,
    });
  }

  async get(id) {
    return await this.handlePost(`${BASE_URL}/a/challenges/show/${id}`);
  }

  async getFromUser(id) {
    return await this.handlePost(`${BASE_URL}/u/challenges/show/${id}`);
  }

  async getPaginateFromUser(_pn = 1, _pi = PAGE_ITEMS) {
    return await this.handlePost(`${BASE_URL}/u/challenges`, {
      _pn,
      _pi,
    });
  }

  async take(level) {
    return await this.handlePost(`${BASE_URL}/u/challenges/take`, {
      level,
    });
  }

  async store(balanceId, serverId, platformId, leverageId, level) {
    return await this.handlePost(
      `${BASE_URL}/u/challenges/store/${balanceId}/${serverId}/${platformId}/${leverageId}`,
      {
        level,
      }
    );
  }

  async update(
    id,
    accountNo,
    password,
    investorPassword,
    metaApiToken,
    metaApiAccountId
  ) {
    return await this.handlePost(`${BASE_URL}/a/challenges/update/${id}`, {
      account_no: accountNo,
      password,
      investor_password: investorPassword,
      meta_api_token: metaApiToken,
      meta_api_account_id: metaApiAccountId,
    });
  }

  async changeStatus(id, challengeStatus) {
    return await this.handlePost(
      `${BASE_URL}/a/challenges/change_status/${id}`,
      {
        challenge_status: challengeStatus,
      }
    );
  }
}
