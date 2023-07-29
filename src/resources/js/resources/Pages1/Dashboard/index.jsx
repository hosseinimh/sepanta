import React from "react";

import { BlankPage } from "../../components";
import { PageUtils } from "./PageUtils";

const Dashboard = () => {
  const pageUtils = new PageUtils();

  return <BlankPage pageUtils={pageUtils}></BlankPage>;
};

export default Dashboard;
