import Image from "next/image";
import React from "react";
import { MainNavBar } from "./MainNavBar";

const MainHeader = () => {
  return (
    <header className="items-center justify-between">
      <Image
        className="m-4 ml-24 block"
        src={"/ui/White Black Camera Logo.png"}
        alt="logo image"
        width={50}
        height={50}
      />
      <MainNavBar />
    </header>
  );
};

export default MainHeader;
