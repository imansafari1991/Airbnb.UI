import { CiSearch } from "react-icons/ci";

export const MobileHeader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <h2>responsive header</h2>
      <CiSearch className="text-neutral-800" />
      <input
        type="text"
        placeholder="Statr your search"
        className="text-neutral-800"
      />
    </div>
  );
};
