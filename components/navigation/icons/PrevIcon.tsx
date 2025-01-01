import type React from "react";
import type { SVGProps } from "react";

export const SVGComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-3 w-3 text-gray-700"
    role="img"
    {...props}
  >
    <title>Previous Icon</title>
    <path d="M10.55.3l1.42 1.4L5.67 8l6.3 6.3-1.42 1.4-6.59-6.58a1.58 1.58 0 0 1-.1-2.13l.1-.11z" />
  </svg>
);
export default SVGComponent;
