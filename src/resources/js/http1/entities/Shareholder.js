import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class Shareholder extends Entity {
    constructor() {
        super();
    }

    async getPaginate(_pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/shareholders`, {
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/shareholders/show/${id}`);
    }
    async del(id) {
        return await this.handlePost(`${BASE_URL}/u/shareholders/show/${id}`);
    }

    async store(
        name,
        family,
        fatherName,
        nationalCode,
        identityNo,
        postalCode,
        village,
        villageTwo,
        gender,
        birthDate,
        mobile,
        address,
        description
    ) {
        return await this.handlePost(`${BASE_URL}/a/shareholders/store`, {
            name,
            family,
            fatherName,
            nationalCode,
            identityNo,
            postalCode,
            village,
            villageTwo,
            gender,
            birthDate,
            mobile,
            address,
            description,
        });
    }

    async update(
        id,
        name,
        family,
        fatherName,
        nationalCode,
        identityNo,
        postalCode,
        village,
        villageTwo,
        gender,
        birthDate,
        mobile,
        address,
        description
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/shareholders/update/${id}`,
            {
                name,
                family,
                fatherName,
                nationalCode,
                identityNo,
                postalCode,
                village,
                villageTwo,
                gender,
                birthDate,
                mobile,
                address,
                description,
            }
        );
    }
}
