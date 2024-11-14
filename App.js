import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Weather from "./screens/Weather";
import TaskManagementScreen from "./screens/TaskManagementScreen";
import TimeTableScreen from "./screens/TimeTableScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="splash">
          
          
          <Stack.Screen name="weather" component={Weather} options={{ headerShown: false }} />
          <Stack.Screen name="task" component={TaskManagementScreen} options={{ headerShown: false }} />
          <Stack.Screen name="timetable" component={TimeTableScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
