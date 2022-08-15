import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center, Heading } from 'native-base'
import { CircularProgressBar } from './CircularProgressBar'

const InsightHeader = () => {
  return (
    <Box mx='4'>
<Center my='5'>
<CircularProgressBar />
</Center>
         <Heading color='black.500' size='md'>Expenses</Heading>
    </Box>
  )
}

export default InsightHeader