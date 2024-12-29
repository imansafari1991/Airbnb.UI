import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export const UserDropDown: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-4 cursor-pointer rounded-full shadow-sm p-2 border-2 hover:shadow-md">
      <IoIosMenu className="text-xl" />
      <FaUserCircle className="text-3xl" />
    </div>
  );
};
