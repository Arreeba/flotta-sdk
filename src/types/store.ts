import { Address, Geometry } from './common';

export type InputStore = {
  name: string,
  email: string,
  phone?: Array<string>,
  address: Address,
  position: Geometry,
};

export type Store = {
  _id: string,
  _businessHolder: string,
  name: string,
  email: string,
  phone?: Array<string>,
  address: Address,
  position: Geometry,
};