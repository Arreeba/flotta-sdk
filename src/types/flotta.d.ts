import { ApolloClient } from 'apollo-client';

import { InputStore, Store } from './store';
import { InputShipment, Shipment } from './shipment';
import { BusinessHolder, Token, AddBHError } from './business-holder';

export interface FlottaInterface {
  apiKey: string;
  flottaEndPoint: string;
  graphQLClient: ApolloClient;
  addShipment(token: string, storeId: string, shipment: InputShipment): Promise<Shipment | Error>;
  addStore(token: string, store: InputStore): Promise<Store | Error>;
  addBusinessHolder(businessHolder: BusinessHolder): Promise<Token | AddBHError>;
}