import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { AppNavigator } from "./navigators"
import { ErrorBoundary } from "./screens/error/error-boundary"
import {QueryClient, QueryClientProvider}  from '@tanstack/react-query'
import {NativeBaseProvider} from 'native-base'
import {Nativetheme} from './theme/Nativetheme'
/**
 * This is the root component of our app.
 */
 const queryClient = new QueryClient();
function App() {

  return (

    <NativeBaseProvider theme={Nativetheme}>
    <QueryClientProvider client={queryClient}>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ErrorBoundary catchErrors={"always"}>
            <AppNavigator            />
          </ErrorBoundary>
        </SafeAreaProvider>
    </QueryClientProvider>
  </NativeBaseProvider>

   

  
  )
}

export default App
