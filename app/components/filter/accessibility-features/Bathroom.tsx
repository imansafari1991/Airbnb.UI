import { randomUUID } from "crypto";
import Feature from "./Feature";

const Bathroom = () => {
  return (
    <Feature
      title="Bathroom"
      descriptions={[
        { id: randomUUID(), checked: false, text: "Step-free bathroom access" },
        {
          id: randomUUID(),
          checked: false,
          text: "Bathroom entrance wider than 32 inches",
        },
        { id: randomUUID(), checked: false, text: "Toilet grab bar" },
        { id: randomUUID(), checked: false, text: "Shower grab bar" },
        { id: randomUUID(), checked: false, text: "Step-free shower" },
        { id: randomUUID(), checked: false, text: "Shower or bath chair" },
      ]}
    />
  );
};
export default Bathroom;
