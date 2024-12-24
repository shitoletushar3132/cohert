import React from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../store/atoms/authAtom";

const Home = () => {
  const token = useRecoilValue(authAtom);
  console.log(token);
  return <div>Home</div>;
};

export default Home;
