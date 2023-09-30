import Header from "@/app/components/header";
import JobDetail from "@/app/components/job/detail";
import React from "react";

async function getJob(id) {
  const res = await fetch(`http://localhost:3009/jobs/${id}`, {
    next: { revalidate: 1000 },
  });
  if (!res.ok) {
    console.log("error while getting jobs");
  }
  return res.json();
}

async function getReviews() {
  const res = await fetch(`http://localhost:3009/reviews`, {
    next: { revalidate: 1000 },
  });
  if (!res.ok) {
    console.log("error while getting reviews");
  }
  return res.json();
}

export default async function JobDetails({ params }) {
  const data = await getJob(params.slug);
  const reviews = await getReviews();

  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <Header title="Job Detail" detailPage={true} />
      <JobDetail data={data} reviews={reviews} />
    </div>
  );
}
