import * as React from "react"
import { SVGProps } from "react"
const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    style={{ width: "24px", height: "24px" }}
    {...props}
  >
    <path
      stroke="#2D5BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M20.25 4.5H3.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z"
    />
    <path
      stroke="#2D5BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m3 15.75 4.72-4.72a.75.75 0 0 1 1.06 0l4.19 4.19a.75.75 0 0 0 1.06 0l1.94-1.94a.75.75 0 0 1 1.06 0L21 17.25"
    />
    <path
      fill="#2D5BFF"
      d="M14.625 10.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </svg>
)
export default Svg
