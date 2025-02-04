export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export type User = {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  address: string;
  phone: string;
  web: string;
  dob: Date;
};
