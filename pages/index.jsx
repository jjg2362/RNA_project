import React from "react";

import Header from "../components/organisms/Header";
import LandingLayout from "../components/templates/LandingLayout";
import Notice from "../components/organisms/Notice";
const Home = () => {
  return (
    <div>
      <Header />
      <LandingLayout>
        <Notice />
      </LandingLayout>
    </div>
  );
};

export default Home;
