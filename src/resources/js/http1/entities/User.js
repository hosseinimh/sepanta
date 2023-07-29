import { BASE_URL, PAGE_ITEMS } from "../../constants";
import utils from "../../utils/Utils";
import Entity from "./Entity";

export class User extends Entity {
  constructor() {
    super();
  }

  async getPaginate(username, nameFamily, email, _pn = 1, _pi = PAGE_ITEMS) {
    return await this.handlePost(`${BASE_URL}/a/users`, {
      username: username,
      name: nameFamily,
      email: email,
      _pn,
      _pi,
    });
  }

  async get(id) {
    return await this.handlePost(`${BASE_URL}/a/users/show/${id}`);
  }

  async getFromUser() {
    return await this.handlePost(`${BASE_URL}/u/users/auth`);
  }

  async store(
    username,
    password,
    confirmPassword,
    name,
    family,
    email,
    role,
    isActive
  ) {
    return await this.handlePost(`${BASE_URL}/a/users/store`, {
      username,
      password,
      password_confirmation: confirmPassword,
      name,
      family,
      email,
      role,
      is_active: isActive,
    });
  }

  async update(id, name, family, email, role, isActive) {
    return await this.handlePost(`${BASE_URL}/a/users/update/${id}`, {
      name,
      family,
      email,
      role,
      is_active: isActive,
    });
  }

  async updateFromUser(name, family) {
    return await this.handlePost(`${BASE_URL}/u/users/update`, {
      name,
      family,
    });
  }

  async changePassword(id, newPassword, confirmPassword) {
    return await this.handlePost(`${BASE_URL}/a/users/change_password/${id}`, {
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    });
  }

  async changePasswordFromUser(newPassword, confirmPassword) {
    return await this.handlePost(`${BASE_URL}/u/users/change_password`, {
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    });
  }

  async forgotPassword(email) {
    return await this.handlePost(`${BASE_URL}/u/users/forgot_password`, {
      email,
    });
  }

  async setLocale(locale) {
    return await this.handlePost(`${BASE_URL}/u/users/set_locale`, {
      _locale: locale,
    });
  }

  logOut() {
    utils.clearLS();
  }
}
