import IconBack from "../../../../assets/icons/IconBack"
import IconArrowForward from "../../../../assets/icons/IconArrowForward"
import IconUser from "../../../../assets/icons/IconUser"
import IconRuler from "../../../../assets/icons/IconRuler"
import {COLORS, FONT, SIZES} from "../../../../constants"
import React, {useCallback, useMemo, useRef} from "react"
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Button,
} from "react-native"
import tw from "twrnc"
import IconApple from "../../../../assets/icons/IconApple"
import IconGoogle from "../../../../assets/icons/IconGoogle"
import IconHalfRuler from "../../../../assets/icons/IconHalfRuler"
import {LinearGradient} from "expo-linear-gradient"
import IconBorderBottom from "../../../../assets/icons/IconBorderBottom"
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"

const SignUp = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ["50%"], [])
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index)
  }, [])
  const handleRefresh = useCallback(() => {
    console.log("handleRefresh")
  }, [])
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])
  return (
    <SafeAreaView style={tw`flex flex-1 px-4`}>
      <View
        style={tw`flex items-center flex-row mt-4 mb-[82px] justify-between`}
      >
        <TouchableOpacity>
          <IconBack />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={tw`flex flex-row items-center gap-[6px]`}>
            <Text
              style={{
                color: COLORS.orange,
                fontWeight: "700",
                fontSize: SIZES.small,
                fontFamily: FONT.regular,
              }}
            >
              Skip
            </Text>
            <IconArrowForward />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={tw`flex flex-1 justify-center items-center`}>
          <IconUser />
          <Text
            style={[
              tw`text-white text-center font-bold text-[34px] mt-5 mb-[8px]`,
              {fontFamily: FONT.regularPhil},
            ]}
          >
            Create your account
          </Text>
          <Text
            style={[
              tw`text-center font-normal text-[16px] mb-[32px]`,
              {fontFamily: FONT.regular, color: COLORS.gray},
            ]}
          >
            CLIENT ACCOUNT
          </Text>
        </View>
        <View style={tw`flex flex-row items-center justify-between gap-[6px]`}>
          <Text
            style={[
              tw`text-white text-center relative font-bold text-[24px] mt-5`,
              {fontFamily: FONT.regular},
            ]}
          >
            Sign up
            <IconBorderBottom style={tw`absolute bottom-[-16px] left-[16px]`} />
          </Text>
          <Text
            style={[
              tw` text-center font-normal text-[20px] mt-5`,
              {fontFamily: FONT.regular, color: COLORS.gray},
            ]}
          >
            Sign in
          </Text>
        </View>
        <IconRuler style={tw`mt-3 mb-9`} />
        <TouchableOpacity>
          <View
            style={[
              tw`px-6 py-4`,
              {
                borderRadius: 40,
                border: "2px solid #FAFAFA",
              },
            ]}
          >
            <View style={tw`flex flex-row items-center justify-center gap-4`}>
              <IconApple />
              <Text
                style={[
                  tw`text-white text-center relative font-bold text-[18px]`,
                  {fontFamily: FONT.regular},
                ]}
              >
                Continue with Apple
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`mt-5`}>
          <View
            style={[
              tw`px-6 py-4`,
              {
                borderRadius: 40,
                border: "2px solid #FAFAFA",
              },
            ]}
          >
            <View style={tw`flex flex-row items-center justify-center gap-4`}>
              <IconGoogle />
              <Text
                style={[
                  tw`text-white text-center relative font-bold text-[18px]`,
                  {fontFamily: FONT.regular},
                ]}
              >
                Continue with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={tw`flex items-center gap-3 flex-row mt-4`}>
          <IconHalfRuler />
          <Text style={[tw`text-white font-bold`, {fontFamily: FONT.regular}]}>
            OR
          </Text>
          <IconHalfRuler />
        </View>

        <TouchableOpacity style={tw`mt-9`} onPress={() => handleSnapPress(0)}>
          <LinearGradient
            colors={["#F3A304", "#F60B32"]}
            style={[
              tw`px-6 py-5`,
              {
                borderRadius: 40,
                border: "none",
              },
            ]}
          >
            <View style={tw`flex flex-row items-center justify-center gap-4`}>
              <Text
                style={[
                  tw`text-white text-center relative font-bold text-[16px]`,
                  {fontFamily: FONT.regular},
                ]}
              >
                Continue with email
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
      <BottomSheetModalProvider>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={0}
          onChange={handleSheetChanges}
          backgroundStyle={{backgroundColor: "white", borderRadius: 50}}
        >
          <TouchableOpacity onPress={handleClosePress}>
            <Text>Close</Text>
          </TouchableOpacity>
          <BottomSheetView style={tw`flex flex-1 items-center`}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </BottomSheetModalProvider>
    </SafeAreaView>
  )
}

export default SignUp
