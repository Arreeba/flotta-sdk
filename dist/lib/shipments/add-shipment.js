"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.ADD_SHIPMENT_MUTATION = graphql_tag_1.default `
  fragment shipmentDetails on Shipment {
    _id
    store {
      _id
    }
    status
    delivery {
      time
      intercom
      customer {
        firstName
        secondName
        phone
        email
      }
      address {
        country
        city
        street
        number
        zipCode
      }
      position{
        type
        coordinates
      }
    }
    order {
      paymentMethod
      currency
      total
      fee
      items {
        name
        quantity
        price
        description
      }
      notes
    }
    notes
  }

  mutation addShipment(
    $storeId: ID!
    $shipment: InputShipment!
  ) {
    shipment: addShipment(
      storeId: $storeId
      shipment: $shipment
    ) {
      ...shipmentDetails
    }
  }
`;
//# sourceMappingURL=add-shipment.js.map