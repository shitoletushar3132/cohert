import React from "react";
import Heading from "../components/Heading";
import SubHeadling from "../components/SubHeadling";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-96 text-center px-6 pb-7">
          <Heading label={"Sign In"} />
          <SubHeadling label={"Enter your credentials to Access your Wallet"} />

          <InputBox placeholder={"JohnWick_12"} label={"UserName"} />

          <InputBox placeholder={"@John123"} label={"Password"} />

          <div className="pt-4">
            <Button label={"Sign In"} />
          </div>
          <BottomWarning
            label={"Don't have a Wallet"}
            to={"/signup"}
            bottonText={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
