import React, { useEffect } from "react";

const PageTitle = ({ children, title }) => {
  useEffect(() => {
    document.title = `AFLAM.TV | ${title ? title : "Watch Movies"}`;
  }, [title])
  return <div>{children}</div>;
};

export default PageTitle;
