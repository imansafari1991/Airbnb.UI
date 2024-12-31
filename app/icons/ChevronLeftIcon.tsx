import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      fill: "none",
      height: 12,
      width: 12,
      stroke: "currentcolor",
      strokeWidth: 4,
      overflow: "visible",
    }}
    {...props}
  >
    <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
  </svg>
);
export default SVGComponent;
