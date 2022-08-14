import React from 'react'
import { Box, Heading, HStack, VStack, Text } from 'native-base'

const ListStandard = () => {

  return (
  <HStack mx='4' my='4' space={4} >
<Box bg='gray.fill' size='12' borderRadius='lg'  />
<VStack mr='16' >
<HStack justifyContent='space-between' alignItems='center' >
<Heading size='md' color='black.500'>Header</Heading>
 <Text color='gray.text' >8m ago</Text>
</HStack>
<Text color='black.500' >He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
</VStack>
  </HStack>
  )
}

export default ListStandard