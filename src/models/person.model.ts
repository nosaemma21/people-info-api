import mongoose from "mongoose";

interface IPerson {
  name: string;
  age: number;
  dateOfBirth: Date;
  gender: GenderOptions;
  zipCode: string;
}

export enum GenderOptions {
  Male = "male",
  Female = "female",
  Other = "other",
}

const PersonSchema = new mongoose.Schema<IPerson>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: {
      type: String,
      required: true,
      enum: Object.values(GenderOptions),
    },
    zipCode: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.model("Person", PersonSchema);

export default Person;
