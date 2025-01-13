"use server";

import { createUserSchema } from "@/app/auth/signup/schemas/createUser";
import { CREATE_USER } from "@/app/graphql/gateway/create-user";

const createUser = async (_preState: any, formData: FormData) => {
  const userData = {
    email: formData.get("email"),
    name: formData.get("name"),
    phone_number: formData.get("phone_number"),
    password: formData.get("password"),
  };
  const createUserInput = createUserSchema.parse(userData);
};
export default createUser;
