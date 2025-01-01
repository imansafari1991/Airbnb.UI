import { randomUUID } from "crypto";
import Feature from "./Feature";

const AdaptiveEquipment = () => {
  return (
    <Feature
      title="AdaptiveEquipment"
      descriptions={[
        { id: randomUUID(), checked: false, text: "Ceiling or mobile hoist" },
        
      ]}
    />
  );
};
export default AdaptiveEquipment;
