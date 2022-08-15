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

export const Toggle: FC<IToggle> = ({
  posts,
  setPosts,
  showPosts,
  firstLabel,
  photos,
  setPhotos,
  showPhotos,
  secondLabel,
}) => {
  return (
    <Box
      mx="4"
      bg="gray.fill"
      borderStyle="solid"
      borderWidth="2"
      borderColor="gray.border"
      rounded="full"
      // shadow='1'
    >
      <HStack>
        <Pressable
          onPress={showPosts}
          bg={posts ? "white.500" : "gray.fill"}
          rounded="full"
          width="1/2"
          padding="3"
        >
          <Center _text={{ color: posts ? "primary.500" : "gray.text" }}>{firstLabel}</Center>
        </Pressable>
        <Pressable
          onPress={showPhotos}
          bg={photos ? "white.500" : "gray.fill"}
          rounded="full"
          width="1/2"
          padding="3"
        >
          <Center _text={{ color: photos ? "primary.500" : "gray.text" }}>{secondLabel}</Center>
        </Pressable>
      </HStack>
    </Box>
  )
}
