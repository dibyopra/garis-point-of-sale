import * as React from "react"
import SvgIconProps from "@core/interfaces/svg_icon"
import Svg, { Path } from "react-native-svg"

export default function Account(props: SvgIconProps) {
  const {size=24,fillColour="#000"} = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zM6 15.98a7.2 7.2 0 0012 0c-.03-1.99-4.01-3.08-6-3.08-2 0-5.97 1.09-6 3.08z"
        fill={fillColour}
        fillOpacity={0.54}
      />
    </Svg>
  )
}
