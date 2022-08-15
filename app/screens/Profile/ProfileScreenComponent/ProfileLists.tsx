import { View, Text, FlatList } from "react-native"
import React from "react"
import { profileListData } from "../mock-data"
import { IList, ListStandard } from "../../../components/List/ListStandard"

export const ProfileLists = () => {
  const _renderItem = ({ item }: any) => (
    <ListStandard header={item.header} time={item.time} subtitle={item.subtitle} />
  )
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={profileListData}
      renderItem={_renderItem}
    />
  )
}
