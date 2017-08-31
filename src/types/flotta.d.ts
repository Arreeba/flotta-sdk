import { ApolloClient } from 'apollo-client';

import { InputStore, Store } from './store';
import { InputShipment, Shipment } from './shipment';
import { BusinessHolder, Token, AddBHError } from './business-holder';

export interface FlottaInterface {
  apiKey: string;
  flottaEndPoint: string;
  GraphQLClient: ApolloClient;
  AddShipment(token: string, storeId: string, shipment: InputShipment): Promise<Shipment | Error>;
  AddStore(token: string, store: InputStore): Promise<Store | Error>;
  AddBusinessHolder(businessHolder: BusinessHolder): Promise<Token | AddBHError>;
}