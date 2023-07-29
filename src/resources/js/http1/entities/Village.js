import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class Village extends Entity {
    constructor() {
        super();
    }

    async getPaginate(districtId = 0, _pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/villages`, {
            district_id: districtId,
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/villages/show/${id}`);
    }

    async store(districtId, name) {
        return await this.handlePost(`${BASE_URL}/a/villages/store`, {
            district_id: districtId,
            name: name,
        });
    }

    async update(id, districtId, name) {
        return await this.handlePost(`${BASE_URL}/a/villages/update/${id}`, {
            district_id: districtId,
            name: name,
        });
    }
}
