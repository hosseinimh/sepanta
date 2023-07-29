import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class Error extends Entity {
    constructor() {
        super();
    }

    async store(error, errorInfo) {
        return await this.handlePost(`${BASE_URL}/a/errors/store`, {
            error,
            error_info: errorInfo,
        });
    }
}
