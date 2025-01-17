"use client";

import { useEffect, useState } from "react";

import { HeaderScrolledSearch } from "./header-scrolled-search";
import { HeaderTabs } from "./header-tabs";
import Image from "next/image";
import { UserAccount } from "./user-account";
import { useScroll } from "@/hooks/useScrooll";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <div className="header fixed top-0 left-0 z-50 w-full h-40 flex items-start justify-between mx-auto pl-4 pr-4 bg-white">
      {/* logo */}
      <Image
        src="/images/Airbnb-Logo.png"
        width={150}
        height={150}
        alt="airbnb logo"
        className="pt-4"
      />

      {/* navbar */}
      {/* <HeaderTabs /> */}
      <div className="bg-white">
        {isScrolled ? <HeaderScrolledSearch /> : <HeaderTabs />}
      </div>

      {/* user account */}
      <UserAccount />
    </div>
  );
};

export default Header;
