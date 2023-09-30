import Image from "next/image";
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
      }}
    >
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-top justify-content-between">
          <Image
            className="img-thumbnail"
            src={item.icon}
            width={70}
            height={70}
            alt={item.companyName}
          />
          <div>
            <HiOutlineBookmark style={{ height: "26px", width: "26px" }} />
          </div>
        </div>
        <div className="text-color-default mt-2">
          <p className="mb-0">
            <span className="fw-medium">{item.position}</span> <br />
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
