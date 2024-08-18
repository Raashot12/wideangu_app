import React from "react"
import {SafeAreaView, Image} from "react-native"
import tw from "twrnc"
import AnimationLogo from "./AnimationLogo"

const SplashScreenView = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 justify-center items-center bg-black`}>
      <AnimationLogo />
    </SafeAreaView>
  )
}

export default SplashScreenView
