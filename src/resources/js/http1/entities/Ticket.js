import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class Ticket extends Entity {
  constructor() {
    super();
  }

  async getPaginate(userId) {
    return await this.handlePost(`${BASE_URL}/a/tickets/${userId}`);
  }

  async getPaginateFromUser() {
    return await this.handlePost(`${BASE_URL}/u/tickets`);
  }

  async get(id) {
    return await this.handlePost(`${BASE_URL}/a/tickets/show/${id}`);
  }

  async getAndSeen(id) {
    return await this.handlePost(`${BASE_URL}/a/tickets/show_seen/${id}`);
  }

  async getFromUser(id) {
    return await this.handlePost(`${BASE_URL}/u/tickets/show/${id}`);
  }

  async getFromUserAndSeen(id) {
    return await this.handlePost(`${BASE_URL}/u/tickets/show_seen/${id}`);
  }

  async store(userId, type, subject, content, file) {
    let data = new FormData();

    data.append("type", type);
    data.append("subject", subject);
    data.append("content", content);
    data.append("file", file);

    return await this.handlePostFile(
      `${BASE_URL}/a/tickets/store/${userId}`,
      data
    );
  }

  async storeFromUser(type, subject, content, file) {
    let data = new FormData();

    data.append("type", type);
    data.append("subject", subject);
    data.append("content", content);
    data.append("file", file);

    return await this.handlePostFile(`${BASE_URL}/u/tickets/store`, data);
  }

  async storeThread(ticketId, content, file) {
    let data = new FormData();

    data.append("content", content);
    data.append("file", file);

    return await this.handlePostFile(
      `${BASE_URL}/a/tickets/store_thread/${ticketId}`,
      data
    );
  }

  async storeThreadFromUser(ticketId, content, file) {
    let data = new FormData();

    data.append("content", content);
    data.append("file", file);

    return await this.handlePostFile(
      `${BASE_URL}/u/tickets/store_thread/${ticketId}`,
      data
    );
  }

  async seen(id) {
    return await this.handlePost(`${BASE_URL}/a/tickets/seen/${id}`);
  }

  async seenFromUser(id) {
    return await this.handlePost(`${BASE_URL}/u/tickets/seen/${id}`);
  }

  async changeStatus(id) {
    return await this.handlePost(`${BASE_URL}/a/tickets/change_status/${id}`);
  }

  async changeStatusFromUser(id) {
    return await this.handlePost(`${BASE_URL}/u/tickets/change_status/${id}`);
  }
}
