import React from "react";
import Header from "../components/header";
import BottomTabMenu from "../components/bottom-tab";
import JobSearchInput from "../components/search-input";
import JobCard from "../components/home/card";

export const metadata = {
  title: "Jobby - Discover",
  openGraph: {
    title: "Jobby - Discover",
    description: "Let's discover your ideal job here",
  },
};

async function getJobs() {
  const res = await fetch("http://localhost:3009/jobs");
  if (!res.ok) {
    console.log("error while getting jobs");
  }
  return res.json();
}

export default async function Discover() {
  const data = await getJobs();

  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <Header title="Discover" />
      <JobSearchInput title="UI UX Designer" />
      <div className="d-flex flex-column gap-2 mt-4">
        {data && data.length
          ? data.map((item, index) => {
              return <JobCard item={item} index={index} />;
            })
          : "No data"}
      </div>
      <BottomTabMenu />
    </div>
  );
}
