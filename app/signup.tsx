import SignUp from "@components/onboarding/client/SignUp"
import SplashScreenView from "@components/shared/SplashScreenView"
import React, {useEffect, useState} from "react"
import {SafeAreaView} from "react-native"

const SignupPage = () => {
  const [isShowSplash, setIsShowSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 3000)
  }, [isShowSplash])
  return (
    <>
      {isShowSplash ? (
        <SplashScreenView />
      ) : (
        <SafeAreaView>
          <SignUp />
        </SafeAreaView>
      )}
    </>
  )
}

export default SignupPage
