import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class Relationship extends Entity {
    constructor() {
        super();
    }

    async getPaginate(districtId = 0) {
        return await this.handlePost(`${BASE_URL}/u/relationships`, {
            district_id: districtId,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/relationships/show/${id}`);
    }

    async store(name) {
        return await this.handlePost(`${BASE_URL}/a/relationships/store`, {
            name: name,
        });
    }

    async update(id, name) {
        return await this.handlePost(
            `${BASE_URL}/a/relationships/update/${id}`,
            {
                name: name,
            }
        );
    }
}
