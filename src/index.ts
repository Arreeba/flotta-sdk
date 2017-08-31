import 'isomorphic-fetch';
import fetch from 'node-fetch';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

import {
  ADD_SHIPMENT_MUTATION,
  ADD_STORE_MUTATION,
} from './lib';

import { FlottaInterface } from './types';

import { InputStore, Store } from './types/store';
import { InputShipment, Shipment } from './types/shipment';
import { BusinessHolder, Token, AddBHError } from './types/business-holder';

class Flotta implements FlottaInterface {

  apiKey: string;

  flottaEndPoint: string;

  graphQLClient: ApolloClient;

  constructor(apiKey: string, flottaEndPoint: string) {
    if (!apiKey) throw new Error('apiKey it\'s required!');
    if (!flottaEndPoint) throw new Error('flottaEndPoint it\'s required!');
    this.apiKey = apiKey;
    this.flottaEndPoint = flottaEndPoint;

    const networkInterface = createNetworkInterface({
      uri: `${this.flottaEndPoint}/graphql`,
    });

    this.graphQLClient = new ApolloClient({
      networkInterface,
    });
  }

  addShipment(token: string, storeId: string, shipment: InputShipment): Promise<Shipment | Error | any> {
    if (!token) throw new Error('token it\'s required');
    if (!storeId) throw new Error('storeId it\'s required');

    this.graphQLClient.networkInterface._opts.headers = {
      Authorization: `Bearer ${token}`,
      'flotta-key': this.apiKey, // NOT ALREADY IMPLEMENTED
    };

    return this.graphQLClient.mutate({
      mutation: ADD_SHIPMENT_MUTATION,
      variables: {
        storeId,
        shipment
      },
    });
  }

  addStore(token: string, store: InputStore): Promise<Store | Error | any> {
    if (!token) throw new Error('token it\'s required');

    this.graphQLClient.networkInterface._opts.headers = {
      Authorization: `Bearer ${token}`,
      'flotta-key': this.apiKey, // NOT ALREADY IMPLEMENTED
    };

    return this.graphQLClient.mutate({
      mutation: ADD_STORE_MUTATION,
      variables: { store },
    });
  }

  addBusinessHolder(businessHolder: BusinessHolder): Promise<Token | AddBHError> {

    const BH_REGISTRATION = `${this.flottaEndPoint}/api/v1/businnes-holder/registration`;
    const body = JSON.stringify({ ...businessHolder });
    const request = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'flotta-key': this.apiKey,
      },
    };

    return fetch(BH_REGISTRATION, request).then(res => res.json());
  }
}

export default Flotta;
