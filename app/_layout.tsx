import React, {useEffect, useState} from "react"
import {Stack} from "expo-router"
import {useFonts} from "expo-font"
import SplashScreenView from "@components/shared/SplashScreenView"

export const unstable_settings = {
  initialRouteName: "index",
}

const Layout = () => {
  const [isShowSplash, setIsShowSplash] = useState(true)
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/Mulish-Bold.ttf"),
    DMMedium: require("../assets/fonts/Mulish-Medium.ttf"),
    DMRegular: require("../assets/fonts/Mulish-Regular.ttf"),
    PhilRegular: require("../assets/fonts/Philosopher-Regular.ttf"),
  })
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 3000)
  }, [isShowSplash])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      {isShowSplash ? (
        <SplashScreenView />
      ) : (
        <Stack
          initialRouteName="login"
          screenOptions={{
            contentStyle: {
              backgroundColor: "#060806",
            },
            headerShown: false,
          }}
        >
          <>
            <Stack.Screen name="login" options={{headerShown: false}} />
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
              }}
            />
          </>
        </Stack>
      )}
    </>
  )
}

export default Layout
