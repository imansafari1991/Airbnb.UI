interface BarCountResult {
  disabledBefor: number;
  disabledAfter: number;
}

export function calculateDisabledBars(
  min: number,
  max: number,
  totalBars: number,
  rangeStart: number,
  rangeEnd: number
): BarCountResult {
  if (min < rangeStart || max > rangeEnd || totalBars <= 0) {
    throw new Error("Invalid Inputs.");
  }

  const barInterval = (rangeEnd - rangeStart) / totalBars - 1;
  const minBarIndex = Math.round((min - rangeStart) / barInterval);
  const maxBarIndex = Math.round((max - rangeStart) / barInterval);

  return {
    disabledBefor: minBarIndex,
    // disabledAfter: totalBars - maxBarIndex - 1,
    disabledAfter: maxBarIndex,
  };
}

// export default calculateDisabledBars;
