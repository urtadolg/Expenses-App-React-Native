import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Pressable } from "react-native";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import EditExpenseScreen from "./screens/EditExpenseScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import { useNavigation } from "@react-navigation/native";
import store from "./store/index";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
   const BottomTabNavigator = () => {
      const navigator = useNavigation();

      return (
         <BottomTab.Navigator
            sceneContainerStyle={{ backgroundColor: "#3300aa" }}
            screenOptions={({ navigation }) => ({
               headerTintColor: "white",
               headerStyle: { backgroundColor: "#4c00ff" },
               tabBarStyle: { backgroundColor: "#4c00ff" },
               tabBarActiveTintColor: "#ffd755",
               headerRight: ({ tintColor }) => (
                  <Pressable
                     style={({ pressed }) =>
                        pressed
                           ? [styles.addBtn, styles.addBtnPressed]
                           : styles.addBtn
                     }
                     onPress={() => navigation.navigate("Add Expense")}
                  >
                     <Ionicons color={tintColor} name="add" size={30} />
                  </Pressable>
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
                  component={EditExpenseScreen}
               />
               <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}

const styles = StyleSheet.create({
   addBtn: { marginRight: 10 },
   addBtnPressed: {
      opacity: 0.25,
   },
});
