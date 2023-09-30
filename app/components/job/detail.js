"use client";
import { imageLoader } from "@/app/utils/image";
import Image from "next/image";
import React, { useState } from "react";

export default function JobDetail(props) {
  const { data, reviews } = props;
  const [active, setActive] = useState("description");

  const Description = () => {
    return (
      <>
        <h6 className="text-color-default">Job Description</h6>
        <p className="text-muted fs-7">{data.descriptions.job}</p>
        <h6 className="text-color-default">Job Responsibility</h6>
        <ul className="text-muted fs-7 ps-3">
          {data.descriptions.responsibilties &&
          data.descriptions.responsibilties.length
            ? data.descriptions.responsibilties.map((item, index) => {
                return (
                  <li key={index} className="text-muted">
                    {item}
                  </li>
                );
              })
            : ""}
        </ul>
      </>
    );
  };

  const Company = () => {
    return (
      <>
        <h6 className="text-color-default">About Company</h6>
        <p className="text-muted fs-7">{data.company}</p>
      </>
    );
  };

  const Review = () => {
    return (
      <>
        {reviews && reviews.length
          ? reviews.map((item, index) => {
              return (
                <div key={index} className="border-bottom mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-color-default">{item.name}</h6>
                    <div className="text-muted fs-7">
                      {new Intl.DateTimeFormat("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(item.date))}
                    </div>
                  </div>
                  <p className="text-muted fs-7 mb-1">{item.review}</p>
                </div>
              );
            })
          : ""}
      </>
    );
  };

  return (
    <div className="d-flex flex-column gap-4 mt-4">
      <div className="d-flex flex-column gap-3 text-center">
        <div
          className="d-flex align-items-center border p-2 rounded mx-auto"
          style={{ height: "100px", width: "100px" }}
        >
          <Image
            className="img-fluid"
            loader={imageLoader}
            src={data.icon}
            width={100}
            height={100}
            alt={data.companyName}
            unoptimized
          />
        </div>
        <div className="text-color-default">
          <p>
            <span className="fs-6 fw-semibold">{data.position}</span> <br />
            <span className="fs-7 fw-light">
              {data.companyName} - {data.address}
            </span>
          </p>
        </div>
      </div>
      <div className="row border rounded mx-2" style={{ height: "82px" }}>
        <div className="col-4 my-auto text-center border-end">
          <p className="text-color-default mb-0">
            <span className="fs-6 fw-medium">{data.sallary}</span> <br />
            <span className="fs-8 fw-light">Sallary</span>
          </p>
        </div>
        <div className="col-4 my-auto text-center border-end">
          <p className="text-color-default mb-0">
            <span className="fs-6 fw-medium">{data.appilicant}</span> <br />
            <span className="fs-8 fw-light">Appilicants</span>
          </p>
        </div>
        <div className="col-4 my-auto text-center">
          <p className="text-color-default mb-0">
            <span className="fs-6 fw-medium">{data.type}</span> <br />
            <span className="fs-8 fw-light">Job Type</span>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-2 border-bottom mx-2">
        <div
          className={`py-2 ${
            active == "description"
              ? "text-primary border-bottom border-primary border-2"
              : "text-muted"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("description")}
        >
          Description
        </div>
        <div
          className={`py-2 ${
            active == "company"
              ? "text-primary border-bottom border-primary border-2"
              : "text-muted"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("company")}
        >
          Company
        </div>
        <div
          className={`py-2 ${
            active == "review"
              ? "text-primary border-bottom border-primary border-2"
              : "text-muted"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("review")}
        >
          Reviews
        </div>
      </div>
      <div id="job-detail" className="mx-1 py-2">
        {active == "description" ? (
          <Description />
        ) : active == "company" ? (
          <Company />
        ) : (
          <Review />
        )}
      </div>
    </div>
  );
}
