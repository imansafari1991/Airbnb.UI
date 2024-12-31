import Image from "next/image";

import { UserAccount } from "./user-account";

import { HeaderTabs } from "./header-tabs";

const Header = () => {
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
      <HeaderTabs />

      {/* user account */}
      <UserAccount />
    </div>
  );
};

export default Header;
