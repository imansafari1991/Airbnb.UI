import type React from "react";
import type { SVGProps } from "react";

const SVGComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    stroke="currentColor"
    fill="none"
    strokeWidth="3"
    role="img"
    className="h-4 w-4 text-gray-700"
    {...props}
  >
    <title>Filter Icon</title>

    <path d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3" />
  </svg>
);
export default SVGComponent;
