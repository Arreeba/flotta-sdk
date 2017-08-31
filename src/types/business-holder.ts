export type BusinessHolder = {
  fisrtName: string,
  secondName: string,
  email: string,
  password: string,
};

export type Token = {
  token: string,
};

export type AddBHError = {
  statusCode: number,
  error: string,
  message: string
};