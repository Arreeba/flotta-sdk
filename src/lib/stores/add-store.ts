import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export const ADD_STORE_MUTATION: DocumentNode = gql`
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