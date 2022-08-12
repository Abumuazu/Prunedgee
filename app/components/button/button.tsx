import {Button, Text } from 'native-base'
import React, { FC } from 'react'
interface Iprops {
    // borderRadius: string
    text: string
}
const FullButton: FC<Iprops> = ({text}) => {
  return (
    <Button width='100%' height='7%' size='lg' borderRadius="full" background='primary.500' >
  <Text fontSize='md' bold> {text}  </Text>
  </Button>
  )
}

export default FullButton