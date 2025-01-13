"use client";
import { Logo } from "@/app/components/Logo";
import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { Button } from "@/app/components/Button";
import { Link } from "@/app/components/Link";
import { clsx } from "clsx";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
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
            <h1 className="mt-8 text-base/6 font-medium">환영합니다.</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              계속하려면 계정에 로그인하세요!
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
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    "group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none",
                    "data-[checked]:bg-black data-[checked]:ring-black",
                    "data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black",
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
                </Checkbox>
                <Label>나를 기억해</Label>
              </Field>
              <Link href="#" className="font-medium hover:text-gray-600">
                비밀번호를 잊으셧나요?
              </Link>
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </div>
          </form>
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            회원이 아니신가요?{" "}
            <Link
              href="/auth/signup"
              className="font-medium hover:text-gray-600"
              title="SignUp"
            >
              계정 만들기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
