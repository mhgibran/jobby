import React from "react";
import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

export default function JobSearchInput(props) {
  const { id, title } = props;
  return (
    <div
      className="d-flex justify-content-between gap-2 align-items-center border rounded px-2 mt-4"
      style={{ height: "64px" }}
    >
      <div className="px-2">
        <HiMagnifyingGlass
          style={{ color: "#98999f", cursor: "pointer", fontSize: "26px" }}
        />
      </div>
      <input
        type="text"
        id={`${!id && "search"}`}
        className="form-control border-0"
        placeholder={`${title}..`}
        aria-label={title}
        autoComplete="off"
      />
      <div className="px-2">
        <HiOutlineAdjustmentsHorizontal
          style={{ color: "#98999f", cursor: "pointer", fontSize: "26px" }}
        />
      </div>
    </div>
  );
}
