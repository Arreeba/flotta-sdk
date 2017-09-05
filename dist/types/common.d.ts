export declare type Country = 'IT' | 'US';
export declare type Address = {
    country: Country;
    city: string;
    street: string;
    number: string;
    zipCode: string;
};
export declare type Geometry = {
    type: string;
    coordinates: Array<number>;
};
