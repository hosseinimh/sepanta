import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class Bank extends Entity {
    constructor() {
        super();
    }

    async getPaginate(_pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/banks`, {
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/banks/show/${id}`);
    }

    async store(name) {
        return await this.handlePost(`${BASE_URL}/a/banks/store`, {
            name: name,
        });
    }

    async update(id, name) {
        return await this.handlePost(`${BASE_URL}/a/banks/update/${id}`, {
            name: name,
        });
    }
}
