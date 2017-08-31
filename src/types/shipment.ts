import { Address, Geometry } from './common';

export type Customer = {
  firstName: string;
  secondName: string;
  phone: string;
  email?: string;
};

export type Delivery = {
  customer: Customer;
  address: Address;
  position: Geometry;
  time: string;
  intercom?: string;
};

export type PaymentMethod =
  'CREDIT_CARD'
  | 'CASH';

export type Currency =
  'EUR'
  | 'USD';


  export type Item = {
  name: string,
  quantity: number,
  price: number,
  description?: string,
};

export type Order = {
  paymentMethod: PaymentMethod,
  currency: Currency,
  total: number,
  fee: number,
  items: Array<Item>,
  notes?: string
};

export type InputShipment = {
  delivery: Delivery;
  order: Order,
  notes?: string,
};

export type Shipment = {
  _id: string,
  store: {
    _id: string,
  },
  status: string,
  delivery: Delivery;
  order: Order,
  notes?: string,
};