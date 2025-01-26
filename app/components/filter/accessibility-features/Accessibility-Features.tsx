import AdaptiveEquipment from "./Adaptive-Equipment";
import Bathroom from "./Bathroom";
import Bedroom from "./Bedroom";
import Guest from "./Guest";

const AccessibilityFeatures = () => {
  return (
    <div className="border border-slate-100 p-5 rounded-md flex flex-col  w-[445px] ">
      <header className="text-3xl my-10">AccessibilityFeatures</header>
      <Guest />
      <Bedroom />
      <Bathroom />
      <AdaptiveEquipment />
    </div>
  );
};
export default AccessibilityFeatures;
