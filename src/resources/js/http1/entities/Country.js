import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class Country extends Entity {
    constructor() {
        super();
    }

    async getPaginate(_pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/countries`, {
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/countries/show/${id}`);
    }

    async store(name) {
        return await this.handlePost(`${BASE_URL}/a/countries/store`, {
            name: name,
        });
    }

    async update(id, name) {
        return await this.handlePost(`${BASE_URL}/a/countries/update/${id}`, {
            name: name,
        });
    }
}
