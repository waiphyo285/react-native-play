import React from 'react';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '@/screens/HomeScreen';
import RanksScreen from '@/screens/RanksScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import RollDiceScreen from '@/screens/Games/RollDiceScreen';

enum RouteNames {
  MainTab = 'MainTab',
  GameHub = 'GameHub',
  Ranks = 'Ranks',
  Profile = 'Profile',
  RollDice = 'RollDice',
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
const HomeStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.background },
        headerRight: () =>
          route.name === RouteNames.GameHub ? (
            <Ionicons
              name="person-sharp"
              size={28}
              color={colors.primary}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate(RouteNames.Profile)}
            />
          ) : null,
      })}>
      <Stack.Screen name={RouteNames.GameHub} component={HomeScreen} />
    </Stack.Navigator>
  );
};

// Ranks Stack Navigator
const RanksStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name={RouteNames.Ranks} component={RanksScreen} />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.GameHub}
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingVertical: 12,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name={RouteNames.GameHub}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteNames.Ranks}
        component={RanksStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Stack Navigator (Handles Full-Screen)
const RootStackNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      {/* Bottom Tabs */}
      <Stack.Screen
        name={RouteNames.MainTab}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* Fullscreen Screens */}
      <Stack.Screen
        name={RouteNames.Profile}
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={28}
              color={colors.primary}
              style={{ marginLeft: 15 }}
              onPress={() => navigation.popToTop()}
            />
          ),
        })}
      />
      <Stack.Screen
        name={RouteNames.RollDice}
        component={RollDiceScreen}
        options={({ navigation }) => ({
          title: 'Roll Dice',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={28}
              color={colors.primary}
              style={{ marginLeft: 15 }}
              onPress={() => navigation.popToTop()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

// App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
