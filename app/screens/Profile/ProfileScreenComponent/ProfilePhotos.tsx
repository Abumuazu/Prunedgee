import React, { FC, useRef } from "react"
import { Box, Heading } from "native-base"
import { Portal } from "react-native-portalize"
import { FixedContent } from "../../../components/Modals"
import {  TouchableOpacity } from "react-native"

interface IModal {
  OpenModal: () => void
  modalRef: any
}
// const modalRef = useRef<Modalize>(null);
export const ProfilePhotos: FC<IModal> = ({ OpenModal, modalRef }) => {
  return (
    <Box m="4">
      <Box
        bg="gray.fill"
        height={300}
        // borderStyle="solid"
        // borderColor="gray.border"
        // borderWidth="2"
        rounded="xl"
      />
      <TouchableOpacity onPress={OpenModal}>
        <Heading my="2" color="black.500" size="sm">
          Header
        </Heading>
      </TouchableOpacity>
      <Portal>
        <FixedContent ref={modalRef} />
        {/* <Modalize ref={modalRef}>...your content</Modalize> */}
      </Portal>
    </Box>
  )
}
