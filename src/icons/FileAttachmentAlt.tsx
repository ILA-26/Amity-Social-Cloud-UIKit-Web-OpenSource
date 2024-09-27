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
      stroke="#ED4129"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m15 7.5-7.81 7.94a1.5 1.5 0 1 0 2.12 2.121l9.31-9.44a3.002 3.002 0 0 0-.973-4.893 3 3 0 0 0-3.269.65l-9.31 9.44a4.5 4.5 0 1 0 6.364 6.364L19.125 12"
    />
  </svg>
)
export default Svg;
