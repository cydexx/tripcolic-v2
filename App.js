import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./components/Tabs";
import AuthStack from "./navigation/AuthStack";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}
