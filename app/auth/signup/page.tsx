"use client";
import { Logo } from "@/app/components/Logo";
import { Field, Input, Label } from "@headlessui/react";
import { Button } from "@/app/components/Button";
import { Link } from "@/app/components/Link";
import { Metadata } from "next";
import { clsx } from "clsx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "가압하기",
//   description: "계정 가입하기",
// };

interface SignUpProps {
  setActiveState?: (value: ((prevState: string) => string) | string) => void;
}

const SignUp = ({ setActiveState }: SignUpProps) => {
  const [show, setShow] = useState(false);
  return (
    <main className="overflow-hidden">
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Logo className="h-12" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">가입하기</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              계속하려면 계정을 만드세요!
            </p>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Email</Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                className={clsx(
                  "block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10",
                  "px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6",
                  "data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black",
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Name</Label>
              <Input
                required
                autoFocus
                type="name"
                name="name"
                className={clsx(
                  "block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10",
                  "px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6",
                  "data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black",
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Phone</Label>
              <Input
                required
                autoFocus
                type="phone"
                name="phone"
                className={clsx(
                  "block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10",
                  "px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6",
                  "data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black",
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3 relative">
              <Label className="text-sm/5 font-medium">Password</Label>
              <Input
                required
                type={`${show ? "password" : "text"}`}
                name="password"
                className={clsx(
                  "block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10",
                  "px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6",
                  "data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black",
                )}
              />
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-2 right-1 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-2 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
            </Field>
            <Field className="mt-8 space-y-3 relative">
              <Label className="text-sm/5 font-medium">Password-Confirm</Label>
              <Input
                required
                type={`${show ? "password" : "text"}`}
                name="passwordConfirm"
                className={clsx(
                  "block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10",
                  "px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6",
                  "data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black",
                )}
              />
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-2 right-1 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-2 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
            </Field>
            <div className="mt-8">
              <Button type="submit" className="w-full">
                가입하기
              </Button>
            </div>
          </form>
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            계정이 있으신가요?{" "}
            <Link
              href="/auth/login"
              className="font-medium hover:text-gray-600"
              title="Login"
            >
              로그인
            </Link>
            <span
              className="text-[#2190ff] pl-1 cursor-pointer"
              onClick={() => setActiveState("SignIn")}
            >
              로그인
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
