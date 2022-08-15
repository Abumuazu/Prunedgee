import { Text, Stack, Pressable, Center } from "native-base"
import React, { FC } from "react"
import { IHeaderProps } from "./header.props"


export const Header: FC<IHeaderProps> = ({
  Left,
  Right,
  CenterText,
  rightColor,
  leftColor,
  CenterColor,
  nextNavigation,
  backNavigation,
}) => {
  return (
    <Stack direction="row" paddingX='2' space={20} justifyContent="center" alignItems="center" mb="3">
      {Left ? (
        <Pressable
          onPress={backNavigation}
          bg="transparent"
          color={leftColor ? leftColor : "black.500"}
        >
          <Text color={leftColor ? leftColor : "black.500"}>{Left}</Text>
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

      <Text fontSize="3xl" bold color={CenterColor ? CenterColor : "black.500"}>
        {CenterText}
      </Text>
      {Right ? (
        <Pressable onPress={nextNavigation}>
          <Text color={rightColor ? rightColor : "#000"}>{Right}</Text>
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

