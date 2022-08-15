import React, { FC } from "react"
import { Box, Heading, HStack, VStack, Text, Divider } from "native-base"

export interface IList {
  header?: string
  time?: string
  subtitle?: string
}
export const ListBasic: FC<IList> = ({ header, time, subtitle }) => {
  return (
    <HStack mx="6" mt="5" space={4}>
      <Box bg="gray.fill" size="12" borderRadius="lg" />
      <VStack mr="16" space={1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="md" color="black.500">
            {header}
          </Heading>
          <Text color="gray.text">{time}</Text>
        </HStack>
        <Text color="black.500">{subtitle}</Text>
        <Divider bg="gray.border" mt="3" />
      </VStack>
    </HStack>
  )
}
