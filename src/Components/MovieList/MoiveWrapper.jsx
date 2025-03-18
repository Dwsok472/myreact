import React from "react";
import { Outlet } from "react-router-dom";

function MoiveWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MoiveWrapper;
