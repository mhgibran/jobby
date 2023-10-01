import RecommendedJob from "./components/home/recommended";
import RecentJob from "./components/home/recent";
import BottomTabMenu from "./components/bottom-tab";
import TopTittle from "./components/title";
import JobSearchInput from "./components/search-input";
import Header from "./components/header";

export const metadata = {
  title: "Jobby - Home",
  openGraph: {
    title: "Jobby - Home",
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

export default async function Home() {
  const data = await getJobs();

  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <Header title="Home" />
      <TopTittle title={`Let's discover`} subTitle={`your ideal job here.`} />
      <JobSearchInput title="Search" />
      <RecommendedJob data={data} />
      <RecentJob data={data} />
      <BottomTabMenu />
    </div>
  );
}
