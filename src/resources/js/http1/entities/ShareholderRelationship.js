import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class ShareholderRelationship extends Entity {
    constructor() {
        super();
    }

    async getPaginate(_pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/shareholderRelationships`, {
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(
            `${BASE_URL}/u/shareholderRelationships/show/${id}`
        );
    }

    async store(
        name,
        family,
        nationalCode,
        identityNo,
        birthDate,
        gender,
        shareholderRelationship,
        description
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/shareholderRelationships/store`,
            {
                name,
                family,
                nationalCode,
                identityNo,
                birthDate,
                gender,
                shareholderRelationship,
                description,
            }
        );
    }

    async update(
        id,
        name,
        family,
        nationalCode,
        identityNo,
        birthDate,
        gender,
        shareholderRelationship,
        description
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/shareholderRelationships/update/${id}`,
            {
                name,
                family,
                nationalCode,
                identityNo,
                birthDate,
                gender,
                shareholderRelationship,
                description,
            }
        );
    }
}
