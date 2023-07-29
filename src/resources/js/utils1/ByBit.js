import axios from "axios";

var createHmac = require("create-hmac");

export class ByBit {
    constructor() {
        let now = new Date();
        this.timestamp = Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes(),
            now.getUTCSeconds()
        ).toString();
        this.recvWindow = '5000';
        this.apiKey = 'yICo1k26O9y4pwR94S';
        this.secret = '22tHgehCy0yJlTCwTgDKyrh7X16O7JXGO2oF';
    }

    async accountBalance() {
        let endpoint = "/v5/account/transaction-log";
        let method = "GET";
        let data = '';
        await this.sendRequest(endpoint, method, data);
    }

    getSignature(parameters) {
        console.log(
            this.timestamp + this.apiKey + this.recvWindow + parameters
        );
        return createHmac("sha256", this.secret)
            .update(this.timestamp + this.apiKey + this.recvWindow + parameters)
            .digest("hex");
    }

    async sendRequest(endpoint, method, data) {
        var sign = this.getSignature(data);
        var url = "https://api.bybit.com";
        var fullendpoint = url + endpoint;
        if (method == "POST") {
            fullendpoint = url + endpoint;
        } else {
            fullendpoint = url + endpoint + "?" + data;
            data = "";
        }
        var config = {
            method: method,
            url: fullendpoint,
            headers: {
                "X-BAPI-SIGN-TYPE": "2",
                "X-BAPI-SIGN": sign,
                "X-BAPI-API-KEY": this.apiKey,
                "X-BAPI-TIMESTAMP": this.timestamp,
                "X-BAPI-RECV-WINDOW": this.recvWindow,
                "Content-Type": "application/json; charset=utf-8",
            },
            data: data,
        };
        console.log("Calling.... " + fullendpoint);
        console.log(config)

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
