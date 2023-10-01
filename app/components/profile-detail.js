"use client";
import React from "react";
import Image from "next/image";
import { imageLoader } from "../utils/image";
import Button from "./button";

export default function ProfileDetail(props) {
  const { name, email } = props;
  return (
    <>
      <div className="d-flex flex-column gap-4 mt-4">
        <div className="d-flex flex-column gap-3 text-center">
          <div
            className="d-flex align-items-center border p-2 rounded mx-auto"
            style={{ height: "100px", width: "100px" }}
          >
            <Image
              className="img-fluid"
              loader={imageLoader}
              src={`https://ui-avatars.com/api/?name=${name}`}
              width={100}
              height={100}
              alt={name}
              unoptimized
            />
          </div>
          <div className="text-color-default">
            <p>
              <span className="fs-6 fw-semibold">{name}</span> <br />
              <span className="fs-7 fw-light">{email}</span>
            </p>
            <Button
              text="Sign Out"
              size="lg"
              variant="link"
              className="text-danger"
            />
          </div>
        </div>
      </div>
    </>
  );
}
