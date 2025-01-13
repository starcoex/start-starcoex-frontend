import { Metadata } from "next";
import Register from "@/app/auth/signup/Register";

export const metadata: Metadata = {
  title: "가압하기",
  description: "계정 가입하기",
};

const SignUp = () => {
  return <Register />;
};

export default SignUp;
