import React from "react";
import { Outlet } from "react-router-dom";

function MoiveWrapper() {
  return (
    <div>
      <h1>MovieWrapper입니다.</h1>
      <Outlet />
    </div>
  );
}

export default MoiveWrapper;
