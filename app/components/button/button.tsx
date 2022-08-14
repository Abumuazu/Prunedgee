import { Button, Text } from "native-base"
import React, { FC } from "react"
interface Iprops {
  // borderRadius: string
  text: string
  nextNavigation?: any
}
export const FullButton: FC<Iprops> = ({ text, nextNavigation }) => {
  return (
    <Button
    padding='3.5'
      width="100%"
      onPress={nextNavigation}
      size="lg"
      borderRadius="full"
      background="primary.500"
    >
      <Text fontSize="md" bold>
    
        {text}
      </Text>
    </Button>
  )
}

 
