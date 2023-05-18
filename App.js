import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

//sreens
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MyAccountScreen from "./screens/MyAccountScreen";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/ui/IconButton";

//QuizScreens:
import QuizOverviewScreen from "./screens/QuizScreens/QuizOverviewScreen";
import FatQuizScreen from "./screens/QuizScreens/FatQuizSceen";
import SugarQuizScreen from "./screens/QuizScreens/SugarQuizSceen";
import ProteinQuizScreen from "./screens/QuizScreens/ProteinQuizSceen";
import VitaminsQuizScreen from "./screens/QuizScreens/VitaminsQuizSceen";
import CarbsQuizScreen from "./screens/QuizScreens/CarbsQuizSceen";
import SleepQuizScreen from "./screens/QuizScreens/SleepQuizSceen";

//Result Screens:
import CaloriesResultScreen from "./screens/ResultsScreens/CaloriesResultScreen";
import GoalsScreen from "./screens/GoalsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
const iconSize = width * 0.1;
const iconSizeBarcode = width * 0.15;

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        drawerActiveTintColor: Colors.primary500,
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={MyAccountScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          swipeEnabled: true,
        }}
      />
      <Drawer.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="checkmark-circle-outline"
              color="black"
              size={size}
            />
          ),
          swipeEnabled: true,
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        tabBarShowLabel: false, // remove text label for all screens
        showLabel: false,
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 40,
          height: 85,
          elevation: 5, // This property adds the shadow to the tab bar
          backgroundColor: "#f8f8ff",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={iconSize} />
          ),

          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={iconSize + 15} />
          ),
        }}
      />
      <Tab.Screen
        name="QuizOverview"
        component={QuizOverviewScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="FatQuiz"
        component={FatQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="SugarQuiz"
        component={SugarQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="ProteinQuiz"
        component={ProteinQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="VitaminsQuiz"
        component={VitaminsQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="CarbsQuiz"
        component={CarbsQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />
      <Tab.Screen
        name="SleepQuiz"
        component={SleepQuizScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Quiz",
        }}
      />

      <Tab.Screen
        name="CaloriesResult"
        component={CaloriesResultScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "Results",
        }}
      />
      <Tab.Screen
        name="My Account"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="GoalsScreen"
        component={DrawerNavigator}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          title: "GoalsScreen",
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <LoadingOverlay />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
