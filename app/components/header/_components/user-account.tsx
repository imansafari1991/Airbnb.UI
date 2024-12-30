import { GrLanguage } from "react-icons/gr";
import { UserDropDown } from "./user-drop-down";

export const UserAccount: React.FC = () => {
  return (
    <div className="mt-4 flex justify-between items-center">
      {/* Airbnb your home */}
      <button className="hover:rounded-full hover:bg-gray-100 hover:shadow-md p-3 font-semibold">
        Airbnb your home
      </button>

      {/* language */}
      <button className="hover:rounded-full hover:bg-gray-100 hover:shadow-md mr-1">
        <GrLanguage className="text-lg m-4 " />
      </button>

      {/* user drop down */}
      <div>
        {/* <UserDropDown /> */}
        <UserDropDown />
      </div>
    </div>
  );
};
