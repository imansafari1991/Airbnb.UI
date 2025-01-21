import Bars from "./PriceRange";
import { calculateDisabledBars } from "./BarCountResult";

const { disabledBefor, disabledAfter } = calculateDisabledBars(
  200,
  800,
  100,
  0,
  1000
);

const Test = () => {
  return (
    <Bars
      totalBars={100}
      disabledBefor={disabledBefor}
      disabledAfter={disabledAfter}
    />
  );
};

export default Test;
