import Link from "next/link";
import React from "react";
import JobSimplyCard from "./simply-card";

export default function RecentJob(props) {
  const { data } = props;
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="text-color-default fw-semibold">Recent Jobs</div>
        <div>
          <Link href="/jobs/recent" className="anchor text-color-primary">
            See All
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column gap-3">
        {data && data.length
          ? data.map((item, index) => {
              return <JobSimplyCard item={item} index={index} />;
            })
          : "No data"}
      </div>
    </div>
  );
}
