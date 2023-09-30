"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import JobCard from "./card";

export default function RecommendedJob(props) {
  const { data } = props;
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="text-color-default fw-semibold">Recommended Jobs</div>
        <div>
          <Link href="/jobs/recommended" className="anchor text-color-primary">
            See All
          </Link>
        </div>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data && data.length
          ? data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <JobCard item={item} />
                </SwiperSlide>
              );
            })
          : "No data"}
      </Swiper>
    </div>
  );
}
