
import App from "./app/app.tsx"
import { AppRegistry } from "react-native"
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent("PrunedgeApp", () => gestureHandlerRootHOC(App))
export default App
