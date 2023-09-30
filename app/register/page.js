import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import googleIcon from "../assets/img/google.png";
import TopTittle from "../components/title";
import FloatingInput from "../components/floating-input";
import Button from "../components/button";

export const metadata = {
  title: "Jobby - Register",
  openGraph: {
    title: "Jobby - Register",
  },
};

export default function Register() {
  return (
    <div className="container">
      <TopTittle title={`Welcome!`} subTitle={`Please Sign up now`} />
      <div className="mt-4">
        <FloatingInput
          icon={<HiOutlineUser />}
          type="text"
          id="fullname"
          label="Fullname"
        />
        <FloatingInput
          icon={<HiOutlineEnvelope />}
          type="email"
          id="email"
          label="Email Address"
        />
        <FloatingInput
          icon={<HiOutlineLockClosed />}
          type="password"
          id="password"
          label="Password"
        />
        <div className="d-flex flex-column text-center gap-3 mt-5">
          <Button
            className="text-white"
            text="Register"
            variant="primary"
            size="lg"
          />
          <p className="fs-6 mb-0">or continue with</p>
          <Button
            className="border-1 d-flex align-items-center justify-content-center gap-2"
            text={
              <>
                <Image src={googleIcon} width={18} height={18} alt="Google" />{" "}
                Google Account
              </>
            }
            variant="light"
            size="lg"
          />
        </div>
      </div>
      <div className="fixed-bottom text-center">
        <p className="text-color-default">
          Already have an account?{" "}
          <Link href="/login" className="text-color-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
