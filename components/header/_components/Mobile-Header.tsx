import { CiSearch } from "react-icons/ci";

export const MobileHeader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <CiSearch />
      <input
        type="text"
        placeholder="Statr your search"
        className="text-neutral-800"
      />
    </div>
  );
};
