import * as React from "react"
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"
const IconBack = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 29.4C22.9529 29.4 29.4 22.9529 29.4 15C29.4 7.04708 22.9529 0.599976 15 0.599976C7.04708 0.599976 0.599976 7.04708 0.599976 15C0.599976 22.9529 7.04708 29.4 15 29.4ZM16.2728 10.8728C16.9757 10.1698 16.9757 9.03013 16.2728 8.32718C15.5698 7.62424 14.4301 7.62424 13.7272 8.32718L8.32718 13.7272C7.62424 14.4301 7.62424 15.5698 8.32718 16.2728L13.7272 21.6728C14.4301 22.3757 15.5698 22.3757 16.2728 21.6728C16.9757 20.9698 16.9757 19.8301 16.2728 19.1272L13.9456 16.8H20.4C21.3941 16.8 22.2 15.9941 22.2 15C22.2 14.0059 21.3941 13.2 20.4 13.2L13.9456 13.2L16.2728 10.8728Z"
      fill="url(#paint0_linear_4446_67)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4446_67"
        x1={15}
        y1={0.599976}
        x2={15}
        y2={29.4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E17918" />
        <Stop offset={1} stopColor="#F1392F" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default IconBack
