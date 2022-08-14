import React from "react"
import { Screen } from "../../components"
import { Box, Text, VStack, Checkbox } from "native-base"
import FullButton from "../../components/Button/Button"
import { InputField, Password } from "../../components/Input/Input"
import Header from "../../components/header/header"
import { TouchableOpacity } from "react-native"
export const Signup = ({ navigation }) => {
  const Next = () => navigation.navigate("profile")
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
        style={{ paddingHorizontal: 10 }}
      >
        <Header CenterText="Sign Up" Right="Login" rightColor="primary.500" nextNavigation={Next} />
        <InputField Placeholder="Name" />
        <InputField Placeholder="Email" />
        <Password Placeholder="password" />
        <Box px="1.5" marginY="5" marginX="2">
          <Checkbox
            alignItems="center"
            isChecked={true}
            colorScheme="green"
            value=""
            _text={{ color: "black.500", paddingRight: 3, fontWeight: 300 }}
            justifyContent="flex-start"
          >
            I would like to receive your newsletter and other promotional information.
          </Checkbox>
        </Box>
        <FullButton nextNavigation={Next} text="Sign Up" />
        <TouchableOpacity onPress={() => ""}>
          <Text bold color="primary.500">
            Forgot your password??
          </Text>
        </TouchableOpacity>
      </VStack>
    </Screen>
  )
}
