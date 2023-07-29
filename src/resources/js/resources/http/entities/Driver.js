import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Driver extends Entity {
  constructor() {
    super();
  }

  async getDriver(id) {
    return await this.handlePostFile(`${BASE_PATH}/a/drivers/show/${id}`);
  }

  async getAllDrivers() {
    return await this.handlePost(`${BASE_PATH}/a/drivers`);
  }

  async storeDriver(
    name,
    family,
    nationalCode,
    mobile,
    driverLicenseNum,
    driverSmartCard
  ) {
    return await this.handlePost(`${BASE_PATH}/a/drivers/store`, {
      name,
      family,
      national_code: nationalCode,
      mobile,
      driver_license_num: driverLicenseNum,
      driver_smart_card: driverSmartCard,
    });
  }

  async deleteDriver(id) {
    return await this.handlePost(`${BASE_PATH}/a/drivers/delete/${id}`);
  }
}
