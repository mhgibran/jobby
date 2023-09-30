import Image from "next/image";
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
        <div>
          <Image
            className="img-thumbnail"
            src={item.icon}
            width={60}
            height={60}
            alt={item.companyName}
          />
        </div>
        <div className="d-flex flex-column gap-2 flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-color-default fw-semibold">
              {item.position}
            </div>
            <div className="text-muted fs-7">
              {new Intl.DateTimeFormat("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(item.date))}
            </div>
          </div>
          <div className="text-color-default fw-semibold">
            {item.companyName} - {item.address}
          </div>
        </div>
      </div>
    </div>
  );
}
