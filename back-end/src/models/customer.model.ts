import { Schema, model } from "mongoose";
import { ICustomer } from "src/interfaces/customer";

const customerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  address: {
    street: { type: String, required: true },
    number: Number,
    complement: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  cpf: { type: String, required: true },
});

const Customer = model<ICustomer>("Customer", customerSchema);

export default Customer;
