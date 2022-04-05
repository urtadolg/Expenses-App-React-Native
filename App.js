import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import store from "./store/index";
import { Provider } from "react-redux";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
   const BottomTabNavigator = () => {
      return (
         <BottomTab.Navigator
            sceneContainerStyle={{ backgroundColor: "#3300aa" }}
            screenOptions={({ navigation }) => ({
               headerTintColor: "white",
               headerStyle: { backgroundColor: "#4c00ff" },
               tabBarStyle: { backgroundColor: "#4c00ff" },
               tabBarActiveTintColor: "#ffd755",
               headerRight: ({ tintColor }) => (
                  <IconButton
                     name="add"
                     color={tintColor}
                     size={30}
                     style={{ marginRight: 10 }}
                     onPress={() => navigation.navigate("Add Expense")}
                  />
               ),
            })}
         >
            <BottomTab.Screen
               name="Recent Added Expenses"
               component={RecentExpensesScreen}
               options={{
                  title: "Recent Expenses",
                  tabBarIcon: ({ color, size }) => (
                     <Ionicons color={color} size={size} name="hourglass" />
                  ),
                  tabBarLabel: "Recent",
               }}
            />
            <BottomTab.Screen
               name="All Expenses"
               component={AllExpensesScreen}
               options={{
                  title: "All Expenses",
                  tabBarIcon: ({ color, size }) => (
                     <Ionicons color={color} size={size} name="calendar" />
                  ),
               }}
            />
         </BottomTab.Navigator>
      );
   };

   return (
      <Provider store={store}>
         <StatusBar style="light" />
         <NavigationContainer>
            <Stack.Navigator
               initialRouteName="All Expenses"
               screenOptions={{
                  headerTintColor: "white",
                  headerStyle: { backgroundColor: "#4c00ff" },
                  contentStyle: { backgroundColor: "#3300aa" },
               }}
            >
               <Stack.Screen
                  name="Bottom Tab"
                  component={BottomTabNavigator}
                  options={{ headerShown: false }}
               />
               <Stack.Screen
                  name="Edit Expenses"
                  component={ManageExpensesScreen}
               />
               <Stack.Screen
                  name="Add Expense"
                  component={ManageExpensesScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}
