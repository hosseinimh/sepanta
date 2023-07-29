import Entity from "./Entity";
import { BASE_PATH } from "../../constants";

export class Car extends Entity {
  constructor() {
    super();
  }

  async getCar(id) {
    return await this.handlePost(`${BASE_PATH}/a/cars/show/${id}`);
  }

  async getAllCars() {
    return await this.handlePost(`${BASE_PATH}/a/cars`);
  }

  async storeCar(
    name,
    family,
    nationalCode,
    mobile,
    carLicensePlateNum,
    carTransitLicensePlateNum
  ) {
    return await this.handlePost(`${BASE_PATH}/a/cars/store`, {
      name,
      family,
      national_code: nationalCode,
      mobile,
      car_license_plate_num: carLicensePlateNum,
      car_transit_license_plate_num: carTransitLicensePlateNum,
    });
  }

  async deleteCar(id) {
    return await this.handlePost(`${BASE_PATH}/a/cars/delete/${id}`);
  }
}
