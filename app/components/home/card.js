"use client";
import { imageLoader } from "@/app/utils/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBookmark } from "react-icons/hi2";

export default function JobCard(props) {
  const { item } = props;
  return (
    <div
      className="card border rounded"
      style={{
        backgroundColor: "#FCFCFD",
        height: "205px",
        minHeight: "205px",
        cursor: "pointer",
      }}
    >
      <div
        className="card-header bg-white border-0"
        style={{ position: "absolute", right: 0, zIndex: 1 }}
      >
        <HiOutlineBookmark style={{ height: "26px", width: "26px" }} />
      </div>
      <div
        className="card-body d-flex flex-column"
        style={{ transform: "rotate(0)" }}
      >
        <div
          className="d-flex align-items-center border rounded p-1"
          style={{ height: "70px", width: "70px" }}
        >
          <Image
            className="img-fluid"
            loader={imageLoader}
            src={item.icon}
            width={70}
            height={70}
            alt={item.companyName}
            unoptimized
          />
        </div>
        <div className="text-color-default mt-2">
          <Link
            className="stretched-link fw-medium text-color-default"
            href={`job/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            {item.position}
          </Link>
          <p className="mb-0">
            <span className="fw-light">
              {item.companyName} - {item.address}
            </span>
          </p>
        </div>
        <div className="d-flex align-items-top justify-content-between mt-4 fs-7">
          <div className="text-muted">
            {new Intl.DateTimeFormat("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(item.date))}
          </div>
          <div className="text-color-default fw-medium">
            {item.type} - {item.sallary}
          </div>
        </div>
      </div>
    </div>
  );
}
