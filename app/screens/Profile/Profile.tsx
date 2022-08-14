import React, { useState } from "react"
import { Screen } from "../../components"
import { Box, Text, HStack, VStack, Center, Checkbox, Pressable, Avatar, AddIcon } from "native-base"
import FullButton from "../../components/Button/Button"
import { InputField, Password } from "../../components/Input/Input"
import Header from "../../components/header/header"
import { Image } from "react-native"
export const Profile = ({ navigation }) => {
  const [Posts, setPosts] = useState(true)
  const [photos, setPhotos] = useState(false)
  const Next = () => navigation.navigate("signup")


  return (
    <Screen backgroundColor="#5DB075">
      <VStack
        bg="white.500"
        flex={1}
       
      >

        <Box bg='primary.500'  width='100%' height={210}>
        <Header CenterText="Profile" CenterColor="white.500" Right="Logout" rightColor="white.500" nextNavigation={Next} />
        <Avatar borderStyle='solid' borderColor='white.500' borderWidth='4' position='absolute'bottom={-50} left='1/4'  bg="black.500" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }} size={180}>
      MA
        {/* <Avatar.Badge   bg="black.500"  >  <Center >      <AddIcon /></Center></Avatar.Badge> */}
      </Avatar>
        </Box>
        <Center  marginTop='16' marginBottom='5'>
        <Text color='black.500' fontSize="4xl" fontWeight={500}>Victoria Robertso</Text>
        <Text color='black.500' fontSize="md" fontWeight={400}> A mantra goes here</Text>
        </Center>

        {/* <Box mx='8' bg='gray.fill' borderStyle='solid' borderWidth='2' borderColor='gray.border' rounded='full' >
<HStack>
<Pressable onPress={showPosts} bg='white.500' rounded='full' width='1/2' padding='3'><Center _text={{color: active ? 'primary.500' : 'black.500'}}>Posts</Center></Pressable>
<Pressable onPress={showPosts}  bg='white.500' rounded='full' width='1/2' padding='3'><Center _text={{color: !active ? 'primary.500' : 'black.500' }}>Photos</Center></Pressable>
</HStack>
        </Box> */}
      </VStack>
    </Screen>
  )
}
