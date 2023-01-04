export type Address = {
  street: String;
  number: Number;
  complement: String;
  city: String;
  state: String;
  zipCode: String;
};

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  address: Address;
  cpf: string;
}
