export type Country = 'IT' | 'US';

export type Address = {
  country: Country;
  city: string;
  street: string;
  number: string;
  zipCode: string;
};

export type Geometry = {
  type: string;
  coordinates: Array<number>;
};
