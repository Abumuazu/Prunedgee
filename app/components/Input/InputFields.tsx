import { Input } from "native-base"
import React, { FC } from "react"
import { IInput } from "./input.props"



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
