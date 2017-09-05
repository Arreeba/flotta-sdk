import 'isomorphic-fetch';
import { ApolloClient } from 'apollo-client';
import { FlottaInterface } from './types';
import { InputStore, Store } from './types/store';
import { InputShipment, Shipment } from './types/shipment';
import { BusinessHolder, Token, AddBHError } from './types/business-holder';
declare class Flotta implements FlottaInterface {
    apiKey: string;
    flottaEndPoint: string;
    graphQLClient: ApolloClient;
    constructor(apiKey: string, flottaEndPoint: string);
    addShipment(token: string, storeId: string, shipment: InputShipment): Promise<Shipment | Error | any>;
    addStore(token: string, store: InputStore): Promise<Store | Error | any>;
    addBusinessHolder(businessHolder: BusinessHolder): Promise<Token | AddBHError>;
}
export default Flotta;
