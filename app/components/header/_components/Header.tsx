import Image from "next/image";
import { HeaderTabs } from "./header-tabs";
import { UserAccount } from "./user-account";
import { Tab } from "../types/header.types";
import { Stays } from "./stays";
import { Experiences } from "./experiences";

const Header = () => {
  const tabs: Tab[] = [
    { label: "Stays", content: <Stays /> },
    { label: "Experiences", content: <Experiences /> },
  ];

  return (
    <div className="header w-full h-40 flex items-start justify-between mt-3 mx-auto pl-4 pr-4">
      {/* logo */}
      <Image
        src="/images/Airbnb-Logo.png"
        width={150}
        height={150}
        alt="airbnb logo"
        className="pt-4"
      />

      {/* navbar */}
      <HeaderTabs tabs={tabs} />

      {/* user account */}
      <UserAccount />
    </div>
  );
};

export default Header;
