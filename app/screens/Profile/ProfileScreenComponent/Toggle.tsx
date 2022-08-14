import React, { FC } from "react"
import { Box, Center, HStack, Pressable } from "native-base"

interface IToggle {
  posts: boolean
  setPosts: Function
  showPosts: () => void
  photos: boolean
  setPhotos: Function
  showPhotos: () => void
  firstLabel: string
  secondLabel: string
}

const Toggle: FC<IToggle> = ({ posts, setPosts, showPosts,firstLabel,  photos, setPhotos, showPhotos, secondLabel }) => {
  return (
    <Box
      mx="8"
      bg="gray.fill"
      borderStyle="solid"
      borderWidth="2"
      borderColor="gray.border"
      rounded="full"
    >
      <HStack>
        <Pressable
          onPress={showPosts}
          bg={posts ? "white.500" : "gray.fill"}
          rounded={posts ? "full" : "none"}
          width="1/2"
          padding="3"
        >
          <Center _text={{ color: posts ? "primary.500" : "gray.text" }}>{firstLabel}</Center>
        </Pressable>
        <Pressable
          onPress={showPhotos}
          bg={photos ? "white.500" : "gray.fill"}
          rounded={photos ? "full" : "none"}
          width="1/2"
          padding="3"
        >
          <Center _text={{ color: photos ? "primary.500" : "gray.text" }}>{secondLabel}</Center>
        </Pressable>
      </HStack>
    </Box>
  )
}

export default Toggle
