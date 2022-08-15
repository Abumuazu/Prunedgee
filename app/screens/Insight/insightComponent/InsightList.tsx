
import React from 'react'
import { Box, Divider, FlatList } from 'native-base'
import { insightListData } from '../../../models/mock-data'
import { ListBasic } from '../../../components/List'
import InsightHeader from './InsightHeader'

export const InsightList = () => {
    const _renderItem = ({item}: any) => <ListBasic header={item.header} subtitle ={item.subtitle}/>
    const _ItemSeparatorComponent= () =>  <Divider bg="gray.border" mt="3" /> 
    const _ListHeaderComponent =() => <InsightHeader />
  return (

<FlatList 
    data={insightListData}
    keyExtractor={item => item.id}
    renderItem={_renderItem}
    ItemSeparatorComponent={_ItemSeparatorComponent}
    ListHeaderComponent={_ListHeaderComponent}
    removeClippedSubviews
    refreshing={true}
    showsVerticalScrollIndicator={false}
   />

  )
}
