import { Address, Geometry } from './common';
export declare type InputStore = {
    name: string;
    email: string;
    phone?: Array<string>;
    address: Address;
    position: Geometry;
};
export declare type Store = {
    _id: string;
    _businessHolder: string;
    name: string;
    email: string;
    phone?: Array<string>;
    address: Address;
    position: Geometry;
};
