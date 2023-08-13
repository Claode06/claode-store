import React from "react";
import Sidenav from "./sidenav";
import TopBar from "./topBar";

const Layout = (props) => {
  const { children, title } = props;
  return (
    <div className="d-flex w-100">
      <div className="w-25">
        <Sidenav />
      </div>
      <div className="w-100 h-100">
        <TopBar title={title} />
        <div className="h-100 overflow-auto pb-3 pe-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
