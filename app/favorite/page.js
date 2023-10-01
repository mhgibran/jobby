import React from "react";
import Header from "../components/header";
import JobSimplyCard from "../components/home/simply-card";
import BottomTabMenu from "../components/bottom-tab";

export const metadata = {
  title: "Jobby - Favorite",
  openGraph: {
    title: "Jobby - Favorite",
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

export default async function Favorite() {
  const data = await getJobs();
  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <Header title="Favorite" />
      <div className="d-flex flex-column gap-2 mt-4">
        {data && data.length
          ? data.map((item, index) => {
              return <JobSimplyCard item={item} index={index} />;
            })
          : "No data"}
      </div>
      <BottomTabMenu />
    </div>
  );
}
