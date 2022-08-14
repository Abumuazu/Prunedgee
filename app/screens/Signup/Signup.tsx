import React, { FC } from "react"
import { Screen, FullButton, Header } from "../../components"
import { Box, Text, VStack, Checkbox } from "native-base"
import { InputField, Password } from "../../components/Input/Index"
import { TouchableOpacity } from "react-native"

interface ISignup {
  onChange?: (isSelected: boolean) => void
  value?: any
  navigation: any
}
export const Signup: FC<ISignup> = ({ navigation }) => {
  // const [checkBoxValues, setCheckBoxValues ] = useState('');
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

          <Checkbox bg='gray.fill' borderStyle='solid' borderWidth='2' borderColor='gray.border' value='I would like to receive your newsletter and other promotional information.' _text={{color:'black'}} accessibilityLabel="choose numbers">
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
