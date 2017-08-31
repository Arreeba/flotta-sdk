import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';


export const ADD_SHIPMENT_MUTATION: DocumentNode = gql`
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