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
    <title>Next Icon</title>
    <path d="M5.41.3 4 1.7 10.3 8 4 14.3l1.41 1.4 6.6-6.58c.57-.58.6-1.5.1-2.13l-.1-.11z" />
  </svg>
);

export default SVGComponent;
