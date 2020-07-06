import React from "react";

export const About: React.FC<{}> = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="subtitle" style={{ textAlign: "center", marginTop: "2%" }}>
        For more financial tools and advice, visit the
      </h2>
      <a
        href="https://www.youngmoneyfinance.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "22px" }}
      >
        Young Money Finance blog
      </a>
      <p style={{ textAlign: "center", paddingTop: "1%" }}>
        Disclaimer: We do not gurantee that the information provided on this
        website is accurate or up to date.
      </p>
      <p style={{ textAlign: "center", paddingTop: "1%" }}>
        2020 © Joshua Pack. All Rights Reserved
      </p>
    </div>
  );
};
