import { BASE_PATH, BASE_URL } from "../../constants";
import utils from "../../utils/Utils";
import Entity from "./Entity";

export class User extends Entity {
  constructor() {
    super();
  }

  async getUser(id) {
    return await this.handelPost(`${BASE_PATH}/a/users/show/${id}`);
  }

  async fetchUser() {
    return await this.handlePost(`${BASE_PATH}/u/users/auth`);
  }

  async getAllUsers() {
    return await this.handlePost(`${BASE_PATH}/a/users`);
  }

  async loginUser(username, password) {
    const result= await this.handlePost(`${BASE_URL}/u/users/login`, {
      username,
      password,
    });
    return result
  }

  async storeUser(
    userName,
    name,
    family,
    nationalCode,
    mobile,
    email,
    password,
    confirmPassword
  ) {
    return await this.handlePost(`${BASE_PATH}/a/users/store`, {
      userName,
      name,
      family,
      national_code: nationalCode,
      mobile,
      email,
      password,
      password_confirmation: confirmPassword,
    });
  }

  async updateUser(id, name, family, nationalCode, mobile, email) {
    return await this.handlePost(`${BASE_PATH}/a/users/update/${id}`, {
      name,
      family,
      national_code: nationalCode,
      mobile,
      email,
    });
  }

  async deleteUser(id) {
    return await this.handlePost(`${BASE_PATH}/a/users/delete/${id}`);
  }

  async forgotPassword(email) {
    return await this.handlePost(`${BASE_PATH}/u/users/forgot_password`, {
      email,
    });
  }

  async changePassword(id, newPassword, confirmPassword) {
    return await this.handlePost(`${BASE_PATH}/a/users/change_password/${id}`, {
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    });
  }

  async changePasswordFromUser(newPassword, confirmPassword) {
    return await this.handlePost(`${BASE_PATH}/u/users/change_password`, {
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    });
  }

  logOut() {
    utils.clearLS();
  }
}
