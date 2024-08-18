import React from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import tw from "twrnc"
import {COLORS, FONT, images, SIZES} from "../../../../constants"
import IconArrowForward from "../../../../assets/icons/IconArrowForward"
import IconLens from "../../../../assets/icons/IconLens"
import IconProfile from "../../../../assets/icons/IconProfile"
import {useRouter} from "expo-router"

const LoginPage = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={tw`flex-1 min-h-full w-full pb-4 relative`}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={() => {}} refreshing={true} />
        }
      >
        <ImageBackground
          source={{
            uri: "../../../../assets/images/bg-login.png",
          }}
          resizeMode="cover"
          style={{
            height: 566,
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <View style={tw`flex flex-row justify-between  bg-no-repeat`}>
            <Image
              source={images.cameraman}
              resizeMode="cover"
              style={{width: 297, height: 327, marginTop: 20}}
            />
            <TouchableOpacity style={tw`fixed top-0`}>
              <View style={tw`flex flex-row items-center mr-4 mt-6 gap-[6px]`}>
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
          <View style={tw`px-[16]`}>
            <Text
              style={[
                tw`text-white text-center font-bold text-[34px] mt-[164px] mb-[8px]`,
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
              HOW DO YOU WANT TO SIGN UP?
            </Text>

            <TouchableOpacity
              style={[
                tw`border py-[20px] px-[26px] flex flex-row flex-nowrap items-center gap-[17px]`,
                {
                  border: "2px solid #FAFAFA",
                  borderRadius: 5,
                },
              ]}
            >
              <IconLens />
              <View style={{width: 256}}>
                <Text
                  style={[
                    tw`font-bold mb-1`,
                    {
                      fontFamily: FONT.regular,
                      color: COLORS.tertiary,
                      fontSize: SIZES.xLarge,
                    },
                  ]}
                >
                  Lensman
                </Text>
                <Text
                  style={[
                    tw`leading-5`,
                    {
                      fontFamily: FONT.regular,
                      color: COLORS.tertiary,
                      fontSize: SIZES.mediumSmall,
                      letterSpacing: "0.2px",
                      fontWeight: 400,
                    },
                  ]}
                >
                  Select this you are a new user and you are looking for a
                  client to hire you
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              style={[
                tw`border py-[20px] px-[26px] flex flex-row flex-nowrap items-center gap-[17px] mt-[16px]`,
                {
                  border: "2px solid #FAFAFA",
                  borderRadius: 5,
                },
              ]}
            >
              {" "}
              <IconProfile />
              <View style={{width: 266}}>
                <Text
                  style={[
                    tw`font-bold mb-1`,
                    {
                      fontFamily: FONT.regular,
                      color: COLORS.tertiary,
                      fontSize: SIZES.xLarge,
                    },
                  ]}
                >
                  Client
                </Text>
                <Text
                  style={[
                    tw`leading-5`,
                    {
                      fontFamily: FONT.regular,
                      color: COLORS.tertiary,
                      fontSize: SIZES.mediumSmall,
                      letterSpacing: "0.2px",
                      fontWeight: 400,
                    },
                  ]}
                >
                  Select this if you are a new user looking for a lensman to
                  hire for your event
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginPage
