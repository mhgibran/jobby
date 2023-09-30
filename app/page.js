import { HiOutlineBell, HiOutlineCog6Tooth } from "react-icons/hi2";
import googleIcon from "./assets/img/google.png";
import tokpedIcon from "./assets/img/tokped.png";
import paypalIcon from "./assets/img/paypal.png";
import gojekIcon from "./assets/img/gojek.png";
import twitterIcon from "./assets/img/twitter.png";
import RecommendedJob from "./components/home/recommended";
import RecentJob from "./components/home/recent";
import BottomTabMenu from "./components/bottom-tab";
import TopTittle from "./components/title";
import JobSearchInput from "./components/search-input";

export const metadata = {
  title: "Jobby - Home",
  openGraph: {
    title: "Jobby - Home",
    description: "Let's discover your ideal job here",
  },
};

export default function Home() {
  const data = [
    {
      id: 1,
      icon: googleIcon,
      companyName: "Google LLC",
      position: "Senior UI Designer",
      address: "South Jakarta",
      date: "2021-06-10",
      type: "Onsite",
      sallary: "$8k/mo",
    },
    {
      id: 2,
      icon: tokpedIcon,
      companyName: "Tokopedia",
      position: "Senior UX Designer",
      address: "West Jakarta",
      date: "2021-05-02",
      type: "Hybrid",
      sallary: "$4k/mo",
    },
    {
      id: 3,
      icon: gojekIcon,
      companyName: "Gojek",
      position: "UX Researcher",
      address: "South Jakarta",
      date: "2021-05-25",
      type: "Onsite",
      sallary: "$3k/mo",
    },
    {
      id: 4,
      icon: paypalIcon,
      companyName: "Paypal",
      position: "Product Manager",
      address: "West Jakarta",
      date: "2021-06-11",
      type: "Onsite",
      sallary: "$6k/mo",
    },
    {
      id: 5,
      icon: twitterIcon,
      companyName: "Twitter",
      position: "UX Designer",
      address: "West Jakarta",
      date: "2021-06-21",
      type: "Hybrid",
      sallary: "$5k/mo",
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <div className="d-flex justify-content-between align-items-center top-bar mt-2">
        <div style={{ marginLeft: "-6px" }}>
          <HiOutlineCog6Tooth className="text-color-default" />
        </div>
        <div className="text-color-default fw-semibold">Home</div>
        <div style={{ marginRight: "-6px" }}>
          <HiOutlineBell className="text-color-default" />
        </div>
      </div>
      <TopTittle title={`Let's discover`} subTitle={`your ideal job here.`} />
      <JobSearchInput title="Search" />
      <RecommendedJob data={data} />
      <RecentJob data={data} />
      <BottomTabMenu />
    </div>
  );
}
