import * as React from "react"
import Svg, {Rect, Defs, LinearGradient, Stop} from "react-native-svg"
const IconBorderBottom = (props: any) => (
  <Svg width={58} height={7} viewBox="0 0 58 7" fill="none" {...props}>
    <Rect
      x={0.5}
      y={0.617554}
      width={57}
      height={6}
      rx={3}
      fill="url(#paint0_linear_1601_9500)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1601_9500"
        x1={16.75}
        y1={7.00037}
        x2={44.25}
        y2={7.00036}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F4800E" />
        <Stop offset={1} stopColor="#F62E27" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default IconBorderBottom
