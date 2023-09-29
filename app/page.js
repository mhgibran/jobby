import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBell,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import googleIcon from "./assets/img/google.png";
import tokpedIcon from "./assets/img/tokped.png";
import paypalIcon from "./assets/img/paypal.png";
import gojekIcon from "./assets/img/gojek.png";
import twitterIcon from "./assets/img/twitter.png";
import RecommendedJob from "./components/home/recommended";
import RecentJob from "./components/home/recent";
import BottomTabMenu from "./components/bottom-tab";

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
    <div className="container pb-5">
      <div className="d-flex justify-content-between align-items-center top-bar mt-2">
        <div style={{ marginLeft: "-6px" }}>
          <HiOutlineCog6Tooth className="text-color-default" />
        </div>
        <div className="text-color-default fw-semibold">Home</div>
        <div style={{ marginRight: "-6px" }}>
          <HiOutlineBell className="text-color-default" />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="fs-4 fw-semibold">
          Let's discover <br />
          your ideal job here.
        </h1>
      </div>
      <div
        className="d-flex justify-content-between gap-2 align-items-center border rounded px-2 mt-4"
        style={{ height: "64px" }}
      >
        <div className="px-2">
          <HiMagnifyingGlass
            style={{ height: "26px", width: "26px", color: "#98999f" }}
          />
        </div>
        <input
          type="text"
          id="search"
          className="form-control border-0"
          placeholder="Search.."
          aria-label="Search"
        />
        <div className="px-2">
          <HiOutlineAdjustmentsHorizontal
            style={{ height: "26px", width: "26px", color: "#98999f" }}
          />
        </div>
      </div>
      <RecommendedJob data={data} />
      <RecentJob data={data} />
      <BottomTabMenu />
    </div>
  );
}
