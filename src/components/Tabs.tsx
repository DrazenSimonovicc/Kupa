import React from "react";
import { colors } from "../../colors/colors";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import Menu from "../screens/Menu";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: colors.textColor,
        tabBarStyle: { backgroundColor: colors.white },
        headerStyle: {
          backgroundColor: colors.white,
        },

        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: colors.darkGray,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? colors.background : colors.textColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="file-text"
              size={25}
              color={focused ? colors.background : colors.textColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={25}
              color={focused ? colors.background : colors.textColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={25}
              color={focused ? colors.background : colors.textColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
