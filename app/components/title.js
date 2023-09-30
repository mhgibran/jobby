import React from "react";

export default function TopTittle(props) {
  const { title, subTitle } = props;
  return (
    <div className="mt-5">
      <h1 className="fs-4 fw-semibold">
        {title} <br />
        {subTitle}
      </h1>
    </div>
  );
}
