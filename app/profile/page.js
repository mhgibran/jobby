import React from "react";
import Header from "../components/header";
import ProfileDetail from "../components/profile-detail";
import BottomTabMenu from "../components/bottom-tab";

export const metadata = {
  title: "Jobby - Profile",
  openGraph: {
    title: "Jobby - Profile",
    description: "Let's discover your ideal job here",
  },
};

export default function Profile() {
  return (
    <div className="container" style={{ paddingBottom: "8rem" }}>
      <Header title="Profile" />
      <ProfileDetail name="John Doe" email="johndoe@gmail.com" />
      <BottomTabMenu />
    </div>
  );
}
