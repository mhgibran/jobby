"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiHome,
  HiMiniBookmark,
  HiMiniUser,
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineSignal,
  HiOutlineUser,
  HiSignal,
} from "react-icons/hi2";

export default function BottomTabMenu() {
  const data = [
    {
      name: "Home",
      icon: <HiOutlineHome style={{ fontSize: "1.5rem" }} />,
      iconActive: <HiHome style={{ fontSize: "1.5rem" }} />,
      link: "/",
    },
    {
      name: "Discover",
      icon: <HiOutlineSignal style={{ fontSize: "1.5rem" }} />,
      iconActive: <HiSignal style={{ fontSize: "1.5rem" }} />,
      link: "/discover",
    },
    {
      name: "Favorite",
      icon: <HiOutlineBookmark style={{ fontSize: "1.5rem" }} />,
      iconActive: <HiMiniBookmark style={{ fontSize: "1.5rem" }} />,
      link: "/favorite",
    },
    {
      name: "Profile",
      icon: <HiOutlineUser style={{ fontSize: "1.5rem" }} />,
      iconActive: <HiMiniUser style={{ fontSize: "1.5rem" }} />,
      link: "/profile",
    },
  ];
  const pathname = usePathname();

  return (
    <div
      className="fixed-bottom d-flex justify-content-between align-items-center bg-white px-4 border-top"
      style={{ height: "94px" }}
    >
      {data && data.length
        ? data.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="d-flex flex-column text-center p-3"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`fs-7 ${
                    pathname == item.link
                      ? "text-primary fw-medium"
                      : "text-muted"
                  }`}
                >
                  {pathname == item.link ? item.iconActive : item.icon}
                </div>
                <div
                  className={`fs-7 ${
                    pathname == item.link
                      ? "text-primary fw-medium"
                      : "text-muted"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            );
          })
        : "No data"}
    </div>
  );
}
