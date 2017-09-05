import { Address, Geometry } from './common';
export declare type Customer = {
    firstName: string;
    secondName: string;
    phone: string;
    email?: string;
};
export declare type Delivery = {
    customer: Customer;
    address: Address;
    position: Geometry;
    time: string;
    intercom?: string;
};
export declare type PaymentMethod = 'CREDIT_CARD' | 'CASH';
export declare type Currency = 'EUR' | 'USD';
export declare type Item = {
    name: string;
    quantity: number;
    price: number;
    description?: string;
};
export declare type Order = {
    paymentMethod: PaymentMethod;
    currency: Currency;
    total: number;
    fee: number;
    items: Array<Item>;
    notes?: string;
};
export declare type InputShipment = {
    delivery: Delivery;
    order: Order;
    notes?: string;
};
export declare type Shipment = {
    _id: string;
    store: {
        _id: string;
    };
    status: string;
    delivery: Delivery;
    order: Order;
    notes?: string;
};
