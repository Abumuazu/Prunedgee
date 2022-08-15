import React, { useRef, useState } from "react"
import { Screen, Header } from "../../components"
import { Box, Text, VStack, Center, Avatar,  ScrollView } from "native-base"
import { Toggle, ProfileLists, ProfilePhotos } from "./ProfileScreenComponent"
import { Animated } from "react-native";
import { Layout } from "../../components/Modals";
import { Modalize } from "react-native-modalize";

export const Profile = ({ navigation }) => {
  //local states
  const [posts, setPosts] = useState<boolean>(true)
  const [photos, setPhotos] = useState<boolean>(false)
  const Next = () => navigation.navigate("signup")

  function showPosts() {
    setPosts(true)
    setPhotos(false)
  }
  function showPhotos() {
    setPosts(false)
    setPhotos(true)
  }

  //modal 
  const modalRef = useRef<Modalize>(null);
  const animated = useRef(new Animated.Value(0)).current
  const OpenModal = () => {
    modalRef.current?.open();
  };
  return (

      <Screen backgroundColor="#5DB075">
      <Layout 
         style={{
          borderRadius: animated.interpolate({ inputRange: [0, 1], outputRange: [0, 12] }),
          transform: [
            {
              scale: animated.interpolate({ inputRange: [0, 1], outputRange: [1, 0.92] }),
            },
          ],
          opacity: animated.interpolate({ inputRange: [0, 1], outputRange: [1, 0.75] }),
        }}
      >
      <VStack bg="white.500" flex={1}>
        <Box bg="primary.500" width="100%" height={210}>
          <Header
            CenterText="Profile"
            CenterColor="white.500"
            Right="Logout"
            rightColor="white.500"
            nextNavigation={Next}
          />
          <Avatar
            borderStyle="solid"
            borderColor="white.500"
            borderWidth="4"
            position="absolute"
            bottom={-50}
            left="1/4"
            bg="black.500"
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            size={180}
          >
            MA
            {/* <Avatar.Badge   bg="black.500"  >  <Center >      <AddIcon /></Center></Avatar.Badge> */}
          </Avatar>
        </Box>
        <Center marginTop="16" marginBottom="5">
          <Text color="black.500" fontSize="4xl" fontWeight={500}>
            Victoria Robertso
          </Text>
          <Text color="black.500" fontSize="md" fontWeight={400}>
            {" "}
            A mantra goes here
          </Text>
        </Center>
        <Toggle
          posts={posts}
          setPosts={setPosts}
          showPosts={showPosts}
          firstLabel="Posts"
          photos={photos}
          setPhotos={setPhotos}
          showPhotos={showPhotos}
          secondLabel="Photos"
        />
        {posts && <ProfileLists />}
        {photos && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProfilePhotos OpenModal={OpenModal} modalRef={modalRef} />
          </ScrollView>
        )}
      </VStack>
      </Layout>
    </Screen>

  )
}
