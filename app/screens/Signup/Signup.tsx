import React from "react"
import { Screen } from "../../components"
import { Box, Text, HStack, VStack, Center, Checkbox, Pressable } from "native-base"
import FullButton from "../../components/Button/Button"
import { InputField, Password } from "../../components/Button/Input/Input"
import Header from "../../components/header/header"
export const Signup = ({ navigation }) => {
  const goBack = () => navigation.goBack()
  const Next = () => navigation.navigate("login")
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
        <Header CenterText="Sign Up" Right="Login" rightColor="primary.500" nextNavigation={Next} />
        <InputField Placeholder="Name" />
        <Password Placeholder="password" />
        <Box px='3' mb='10' mt='7' >
     <Checkbox alignItems='center' isChecked={true} colorScheme="green" value="" >
          <Text _important={{ color: "black.500" }}>
            {" "}
            I would like to receive your newsletter and other promotional information.
          </Text>
        </Checkbox>
     </Box>
        <FullButton text="Sign Up" />
        <Pressable onPress={() => ''}   bg="transparent" >
        <Text bold color='primary.500'>Forgot your password??</Text>
        </Pressable>
 
      </VStack>
    </Screen>
  )
}
