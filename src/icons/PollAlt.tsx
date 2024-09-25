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
      stroke="#0CB377"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M3.75 20.25V3.75M3.75 5.25h12v4.5M20.25 9.75H3.75v4.5h16.5v-4.5ZM12.75 14.25v4.5h-9"
    />
  </svg>
)
export default Svg;
