import React, { FC } from "react"
import { Box, Heading, HStack, VStack, Text, Divider } from "native-base"

export interface IList {
  header?: string
  time?: string
  subtitle?: string
}
export const ListBasic: FC<IList> = ({ header, subtitle }) => {
  return (
    <HStack mx="4" mt="5"  justifyContent= 'space-between' alignItems='center' >
        <HStack justifyContent= 'center' alignItems='center' space={3}>
        <Box bg="primary.500" size="4" rounded='full' />
        <Heading size="xs" color="black.500">
           {header}
          </Heading>
        </HStack>
        <Text color="black.500">{subtitle}</Text>
    </HStack>
  )
}

