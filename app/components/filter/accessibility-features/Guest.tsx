import { randomUUID } from "crypto";
import Feature from "./Feature";

const Guest = () => {
  return (
    <Feature
      title="Guest Entrance And Parking"
      descriptions={[
        { id: randomUUID(), checked: false, text: "Step-free guest entrance" },
        {
          id: randomUUID(),
          checked: false,
          text: "Guest entrance wider than 32 inches",
        },
        { id: randomUUID(), checked: false, text: "Disabled parking spot" },
        {
          id: randomUUID(),
          checked: false,
          text: "Step-free path to the guest entrance",
        },
      ]}
    />
  );
};
export default Guest;
