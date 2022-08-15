import { Box } from "native-base"
import React from "react"
import { Header, Screen } from "../../components"
import { Layout } from "../../components/Modals"
import { InsightList } from "./insightComponent/InsightList"

export const Insight = ({ navigation }) => {
  return (
    <Screen backgroundColor="#fff" preset="fixed" statusBar='dark-content'>
      <Layout style={{}}>
        <Header
          CenterText="Insights"
          CenterColor="black.500"
          Left="Back"
          leftColor="primary.500"
          rightColor="white.500"
          backNavigation={() => navigation.goBack()}
        />

<Box pb='16'>
<InsightList />
</Box>
      </Layout>
    </Screen>
  )
}
