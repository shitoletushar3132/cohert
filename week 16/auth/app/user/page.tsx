import React from "react";
import Appbar from "../components/Appbar";
import { NEXT_AUTH } from "../lib/auth";
import { getServerSession } from "next-auth";

const page = () => {
  const session = getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />

      {JSON.stringify(session)}
    </div>
  );
};

export default page;
