import React from "react";

import { BASE_PATH } from "../../../constants";
import { useLocale } from "../../../hooks";
import { Footer } from "../";

const FallbackError = () => {
  const { general } = useLocale();
  return (
    <div className="dashboard d-flex">
      <div className="main">
        <div className="center">
          <div className="dashboard-content">
            <div className="content-title">
              <h2>{general.brandLogo}</h2>
            </div>
            <div className="section fix-mr15">
              <div className="block pd-15" style={{ textAlign: "center" }}>
                <div className="alert mb-20 alert-danger">
                  {general.fallbackError}
                </div>
                <a className="btn btn-primary" href={BASE_PATH}>
                  {general.fallbackReturnHome}
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FallbackError;
