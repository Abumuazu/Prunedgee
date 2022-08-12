import { View, Text } from 'react-native'
import React from 'react'
import {  Screen } from '../../components'
import {Box, HStack, VStack, Center} from "native-base"
import FullButton from '../../components/Button/Button'
import {InputField, Password} from '../../components/Button/Input/Input'
import Header from '../../components/header/header'
export const Login = ({navigation}) => {
  const goBack = () => navigation.goBack()
  return (
   <Screen backgroundColor="#5DB075" >

<VStack paddingX={4} height={51} paddingY={2.5} bg='white.500' flex={1} space={4} alignItems="center">

     <Header Left='Back' CenterText='Login' Right='sign up' rightColor='primary.500' backNavigation={goBack} />
      <InputField  Placeholder ='Name'/>
      <Password Placeholder = 'password'  />
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
      <FullButton text= 'Login' />
     

    </VStack>
 

   </Screen>
  )
}

 