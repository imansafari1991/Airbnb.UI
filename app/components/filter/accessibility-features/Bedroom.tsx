import { randomUUID } from "crypto";
import Feature from "./Feature";

const Bedroom = () => {
  return (
    <Feature
      title="Bedroom"
      descriptions={[
        { id: randomUUID(), checked: false, text: "Step-free bedroom access" },
        {
          id: randomUUID(),
          checked: false,
          text: "Bedroom entrance wider than 32 inches",
        },
      ]}
    />
  );
};
export default Bedroom;
