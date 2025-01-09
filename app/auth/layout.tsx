"use client";
import { useState } from "react";
import Login from "@/app/auth/login/page";
import SignUp from "@/app/auth/signup/page";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeState, setActiveState] = useState("Login");
  return (
    <div>
      {activeState === "Login" ? (
        <Login setActiveState={setActiveState} setOpen={setOpen} />
      ) : null}
      {activeState === "SignUp" ? (
        <SignUp setActiveState={setActiveState} />
      ) : null}
    </div>
  );
};

export default Layout;
