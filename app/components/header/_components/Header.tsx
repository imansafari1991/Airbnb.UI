"use client";

import Image from "next/image";

import { UserAccount } from "./user-account";

import { HeaderTabs } from "./header-tabs";
import { useEffect, useState } from "react";
import { HeaderScrolledSearch } from "./header-scrolled-search";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFirstComponent, setshowFirstComponent] = useState(true);

  // Monitor scroll position
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setshowFirstComponent(false);
      } else {
        setshowFirstComponent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {/* <div className="bg-white">
        {isScrolled ? <HeaderScrolledSearch /> : <HeaderTabs />}
      </div> */}

      <AnimatePresence mode="wait">
        {showFirstComponent ? (
          <motion.div
            key="HeaderTabs"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <HeaderTabs />
          </motion.div>
        ) : (
          <motion.div
            key="HeaderScrolledSearch"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <HeaderScrolledSearch />
          </motion.div>
        )}
      </AnimatePresence>

      {/* user account */}
      <UserAccount />
    </div>
  );
};

export default Header;
