import React from "react"
import { Screen,Header, FullButton } from "../../components"
import { VStack, Center, Text } from "native-base"
import { InputField, Password } from "../../components/Input/Index"
import { TouchableOpacity } from "react-native"


export const Login = ({ navigation }) => {
  const goBack = () => navigation.goBack()
  const next = () => navigation.navigate("signup")
  return (
    <Screen backgroundColor="#5DB075">
      <VStack
        paddingX={4}
        height={51}
        paddingY={2.5}
        bg="white.500"
        flex={1}
        space={4}
        alignItems="center"
      >
        <Header
          Left="Back"
          CenterText="Login"
          Right="sign up"
          rightColor="primary.500"
          backNavigation={goBack}
          nextNavigation={next}
        />
        <InputField Placeholder="Name" />
        <Password Placeholder="password" />
        <Center
          bg="transparent"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={100}
          width={{
            base: 50,
            lg: 90,
          }}
        ></Center>
        <FullButton text="Login" />
        <TouchableOpacity onPress={() => ""}>
          <Text bold color="primary.500">
            Forgot your password??
          </Text>
        </TouchableOpacity>
      </VStack>
    </Screen>
  )
}
