import {Button, Text, Box, Input, Stack, Pressable } from 'native-base'
import React, { FC } from 'react'
interface IInput {
    Placeholder?: string
}

interface IPassword {
    Placeholder?: string
    textRight: string
}
export const InputField: FC<IInput> = ({Placeholder}) => {
    const [show, setShow] = React.useState(false);
    return <Input size='md' height='7%' rounded='lg' borderColor='gray.border' color='gray.text' bg='gray.fill' isFullWidth placeholder={Placeholder} />
      
    
  }

 //Password
  export const Password:FC<IInput> = ({Placeholder}) => {
    const [show, setShow] = React.useState(false);
    return <Input size='md' height='7%' rounded='lg' borderColor='gray.border' color='gray.text' bg='gray.fill' isFullWidth placeholder={Placeholder} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Text color= 'primary.500' paddingRight='5' fontSize='md'>{show? 'Hide' : 'Show'}</Text> 
        </Pressable>} /> 
      
     
  };



