import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class ChallengeBalance extends Entity {
    constructor() {
        super();
    }

    async getAll() {
        return await this.handlePost(`${BASE_URL}/u/challenge_balances`);
    }

    async get(id) {
        return await this.handlePost(
            `${BASE_URL}/u/challenge_balances/show/${id}`
        );
    }

    async store(value, free, real) {
        return await this.handlePost(`${BASE_URL}/a/challenge_balances/store`, {
            value,
            free,
            real,
        });
    }

    async update(id, value, free, real) {
        return await this.handlePost(
            `${BASE_URL}/a/challenge_balances/update/${id}`,
            {
                value,
                free,
                real,
            }
        );
    }

    async delete(id) {
        return await this.handlePost(
            `${BASE_URL}/a/challenge_balances/delete/${id}`
        );
    }
}
