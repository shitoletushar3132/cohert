import React from "react";
import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-7 ">
        <div className="flex flex-row-reverse underline pb-2">
          <Balance value={10000} />
        </div>

        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
