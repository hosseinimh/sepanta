import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class Campaign extends Entity {
    constructor() {
        super();
    }

    async getPaginate() {
        return await this.handlePost(`${BASE_URL}/u/campaigns`);
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/campaigns/show/${id}`);
    }

    async store(title, isActive) {
        return await this.handlePost(`${BASE_URL}/a/campaigns/store`, {
            title,
            is_active: isActive,
        });
    }

    async update(id, title, isActive) {
        return await this.handlePost(`${BASE_URL}/a/campaigns/update/${id}`, {
            title,
            is_active: isActive,
        });
    }
}
