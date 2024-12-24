import React from "react";
import Heading from "../components/Heading";
import SubHeadling from "../components/SubHeadling";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-96 text-center px-6 pb-7">
          <Heading label={"Sign up"} />
          <SubHeadling label={"Enter your information to create the Wallet"} />
          <InputBox placeholder={"John"} label={"First Name"} />

          <InputBox placeholder={"Wick"} label={"Last Name"} />

          <InputBox placeholder={"JohnWick_12"} label={"UserName"} />

          <InputBox placeholder={"@John123"} label={"Password"} />

          <div className="pt-4">
            <Button label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            to={"/signin"}
            bottonText={"Sign In"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
