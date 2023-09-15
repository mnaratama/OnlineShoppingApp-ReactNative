import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Details } from "./screens";
import { useCallback } from "react";
import BottomTabNavigation from "./navigations/BottomTabNavigation";

const Stack = createNativeStackNavigator()

export default function App() {
  const [fonstLoaded] = useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
    medium: require("./assets/fonts/Inter-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fonstLoaded]);

  if (!fonstLoaded) {
    return null
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
      <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}