"use client";
import { imageLoader } from "@/app/utils/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JobSimplyCard(props) {
  const { item, index } = props;
  return (
    <div
      key={index}
      className="card border rounded"
      style={{
        backgroundColor: "#FCFCFD",
      }}
    >
      <div className="card-body d-flex justify-content-start gap-2">
        <div
          className="d-flex align-items-center border rounded p-1"
          style={{ height: "60px", width: "60px" }}
        >
          <Image
            className="img-fluid"
            loader={imageLoader}
            src={item.icon}
            width={60}
            height={60}
            alt={item.companyName}
            unoptimized
          />
        </div>
        <div className="d-flex flex-column gap-2 flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              className="stretched-link fw-semibold text-color-default"
              href={`job/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              {item.position}
            </Link>
            <div className="text-muted fs-7">
              {new Intl.DateTimeFormat("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(item.date))}
            </div>
          </div>
          <div className="text-color-default fw-light">
            {item.companyName} - {item.address}
          </div>
        </div>
      </div>
    </div>
  );
}
