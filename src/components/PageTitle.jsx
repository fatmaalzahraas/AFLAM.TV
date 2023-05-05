import React from "react";

const PageTitle = ({ children, title }) => {
  document.title = `AFLAM.TV | ${title ? title : "Watch Movies"}`;
  return <div>{children}</div>;
};

export default PageTitle;
