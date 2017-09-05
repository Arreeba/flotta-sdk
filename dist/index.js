"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const node_fetch_1 = require("node-fetch");
const apollo_client_1 = require("apollo-client");
const lib_1 = require("./lib");
class Flotta {
    constructor(apiKey, flottaEndPoint) {
        if (!apiKey)
            throw new Error('apiKey it\'s required!');
        if (!flottaEndPoint)
            throw new Error('flottaEndPoint it\'s required!');
        this.apiKey = apiKey;
        this.flottaEndPoint = flottaEndPoint;
        const networkInterface = apollo_client_1.createNetworkInterface({
            uri: `${this.flottaEndPoint}/graphql`,
        });
        this.graphQLClient = new apollo_client_1.ApolloClient({
            networkInterface,
        });
    }
    addShipment(token, storeId, shipment) {
        if (!token)
            throw new Error('token it\'s required');
        if (!storeId)
            throw new Error('storeId it\'s required');
        this.graphQLClient.networkInterface._opts.headers = {
            Authorization: `Bearer ${token}`,
            'flotta-key': this.apiKey,
        };
        return this.graphQLClient.mutate({
            mutation: lib_1.ADD_SHIPMENT_MUTATION,
            variables: {
                storeId,
                shipment
            },
        });
    }
    addStore(token, store) {
        if (!token)
            throw new Error('token it\'s required');
        this.graphQLClient.networkInterface._opts.headers = {
            Authorization: `Bearer ${token}`,
            'flotta-key': this.apiKey,
        };
        return this.graphQLClient.mutate({
            mutation: lib_1.ADD_STORE_MUTATION,
            variables: { store },
        });
    }
    addBusinessHolder(businessHolder) {
        const BH_REGISTRATION = `${this.flottaEndPoint}/api/v1/businnes-holder/registration`;
        const body = JSON.stringify(Object.assign({}, businessHolder));
        const request = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'flotta-key': this.apiKey,
            },
        };
        return node_fetch_1.default(BH_REGISTRATION, request).then(res => res.json());
    }
}
exports.default = Flotta;
//# sourceMappingURL=index.js.map