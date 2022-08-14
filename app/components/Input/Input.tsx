import { Text, Input, Pressable } from "native-base"
import React, { FC } from "react"
interface IInput {
  Placeholder?: string
}

interface IPassword {
  Placeholder?: string
}
interface IInput {
  Placeholder?: string
}
export const InputField: FC<IInput> = ({ Placeholder }) => {
  return (
    <Input 
    padding='3.5'
    color='black.500'
    backgroundColor='gray.fill'
    placeholderTextColor='gray.text'
    size="xl"
      rounded="lg"
      borderStyle='solid' borderWidth='2' borderColor='gray.border'
      bg="gray.fill"
      isFullWidth
      placeholder={Placeholder}
    />
  )
}
//Password
export const Password: FC<IPassword> = ({ Placeholder }) => {
  const [show, setShow] = React.useState(false)
  return (
    <Input
    padding='3.5'
    color='black.500'
    backgroundColor='gray.fill'
    placeholderTextColor='gray.text'
      size="xl"
      rounded="lg"
      borderStyle='solid' borderWidth='2' borderColor='gray.border'
      bg="gray.fill"
      isFullWidth
      placeholder={Placeholder}
      type={show ? "text" : "password"}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Text color="primary.500" paddingRight="5" fontSize="md">
            {show ? "Hide" : "Show"}
          </Text>
        </Pressable>
      }
    />
  )
}
