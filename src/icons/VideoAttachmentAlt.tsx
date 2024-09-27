import * as React from "react"
import { SVGProps } from "react"
const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#5C2DD3"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#5C2DD3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m16 12-6-4v8l6-4Z"
    />
  </svg>
)
export default Svg
