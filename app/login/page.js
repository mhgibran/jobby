import Link from "next/link";
import React from "react";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import googleIcon from "../assets/img/google.png";
import Image from "next/image";

export default function Login() {
  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="fs-4">
          Welcome! <br />
          Let's Sign in now
        </h1>
      </div>
      <div className="mt-4">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <HiOutlineEnvelope />
          </span>
          <div className="form-floating">
            <input
              type="email"
              id="email"
              className="form-control border-start-0"
              placeholder="Email"
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <HiOutlineLockClosed />
          </span>
          <div className="form-floating">
            <input
              type="password"
              id="password"
              className="form-control border-start-0"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link href="/forgot-password" className="anchor fs-6">
            Forgot Password?
          </Link>
        </div>
        <div className="d-flex flex-column text-center gap-3 mt-5">
          <button
            type="button"
            className="btn btn-lg btn-primary text-white fs-6"
          >
            Login
          </button>
          <p className="fs-6 mb-0">or continue with</p>
          <button
            type="button"
            className="btn btn-light btn-lg border-1 d-flex align-items-center justify-content-center gap-2 fs-6"
          >
            <Image src={googleIcon} width={18} height={18} alt="Google" />{" "}
            Google Account
          </button>
        </div>
      </div>
      <div className="fixed-bottom text-center">
        <p className="text-color-default">
          Don't have an account?{" "}
          <Link href="/register" className="text-color-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
