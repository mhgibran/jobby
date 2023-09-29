import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBell,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center top-bar mt-2">
        <div style={{ marginLeft: "-6px" }}>
          <HiOutlineCog6Tooth className="text-color-default" />
        </div>
        <div className="text-color-default">Home</div>
        <div style={{ marginRight: "-6px" }}>
          <HiOutlineBell className="text-color-default" />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="fs-4">
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
    </div>
  );
}
