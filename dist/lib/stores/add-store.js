"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.ADD_STORE_MUTATION = graphql_tag_1.default `
  mutation addStore ($store: InputStore!){
    store: addStore(store: $store) {
      _id
      _businessHolder
      name
      email
      phone
      address {
        country
        city
        street
        number
        zipCode
      }
      position {
        type
        coordinates
      }
    }
  }
`;
//# sourceMappingURL=add-store.js.map