import { Button, Text, Box, Input, Stack, HStack, Pressable, Center } from "native-base"
import React, { FC, ReactNode } from "react"

interface IHeader {
  Left?: string | ReactNode
  Right?: string
  CenterText: string
  rightColor?: string
  leftColor?: string
  nextNavigation?: any
  backNavigation?: any
}
const Header: FC<IHeader> = ({ Left, Right, CenterText, rightColor, leftColor, nextNavigation, backNavigation }) => {
  return (
    <Stack direction="row" space={20} justifyContent="center" alignItems="center" mb='3'>
      {Left ? (
        <Pressable onPress={backNavigation}   bg="transparent" color={leftColor ? leftColor : 'black.500'}>
        <Text color={leftColor ? leftColor : 'black.500'}>{Left}</Text>
        </Pressable>

      ) : (
        <Center
          bg="transparent"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={30}
          width={{
            base: 50,
            lg: 90,
          }}
        ></Center>
      )}

      <Text fontSize="3xl" bold color="black.500">
        {CenterText}
      </Text>
      {Right ? (
        <Pressable onPress={nextNavigation}>
        <Text color={rightColor ? rightColor : '#000'}>{Right}</Text>
        </Pressable>

      ) : (
        <Center 
          bg="transparent"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={30}
          width={{
            base: 50,
            lg: 90,
          }}
        ></Center>
      )}
    </Stack>
  )
}
export default Header
