import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Welcome from "./src/screens/UntilLogIn/Welcome";
import First from "./src/screens/UntilLogIn/First";
import GetStarted from "./src/screens/UntilLogIn/GetStarted";
import SignIn from "./src/screens/UntilLogIn/SignIn";
import SignUp from "./src/screens/UntilLogIn/SignUp";
import Congrat from "./src/screens/UntilLogIn/Congrat";
import VerificationCode from "./src/screens/UntilLogIn/VerificationCode";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/components/Tabs";
import Home from "./src/screens/Home";
import Menu from "./src/screens/Menu";
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";
import MyAccount from "./src/screens/AccountSettings/MyAccount";
import Address from "./src/screens/AccountSettings/Address";
import Settings from "./src/screens/AccountSettings/Settings";
import CombinedScreen from "./src/screens/UntilLogIn/OpeningPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OpeningPage"
          component={CombinedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Congrat"
          component={Congrat}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
