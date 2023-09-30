"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineBell,
  HiOutlineBookmark,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export default function Header(props) {
  const { title, detailPage } = props;
  const router = useRouter();
  return (
    <div className="d-flex justify-content-between align-items-center top-bar mt-2">
      <div style={{ marginLeft: "-6px", cursor: "pointer" }}>
        {detailPage ? (
          <HiOutlineArrowSmallLeft
            className="text-color-default"
            onClick={() => router.push("/", { scroll: true })}
          />
        ) : (
          <HiOutlineCog6Tooth className="text-color-default" />
        )}
      </div>
      <div className="text-color-default fw-semibold">{title}</div>
      <div style={{ marginRight: "-6px", cursor: "pointer" }}>
        {detailPage ? (
          <HiOutlineBookmark className="text-color-default" />
        ) : (
          <HiOutlineBell className="text-color-default" />
        )}
      </div>
    </div>
  );
}
