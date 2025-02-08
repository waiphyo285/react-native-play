import React from 'react';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import RanksScreen from './src/screens/RanksScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RollDiceScreen from './src/screens/Games/RollDiceScreen';

enum RouteNames {
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
        headerShown: true,
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.background },
        headerRight: () =>
          route.name === RouteNames.GameHub ? (
            <Ionicons
              name="person-sharp"
              size={28}
              color={colors.primary}
              style={{ marginRight: 15 }}
              onPress={() => navigation.push(RouteNames.Profile)}
            />
          ) : null,
      })}>
      <Stack.Screen name={RouteNames.GameHub} component={HomeScreen} />
      <Stack.Screen name={RouteNames.Profile} component={ProfileScreen} />
      <Stack.Screen
        name={RouteNames.RollDice}
        component={RollDiceScreen}
        options={{ title: 'Roll Dice' }}
      />
    </Stack.Navigator>
  );
};

// Ranks Stack Navigator
const RanksStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
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
      screenOptions={() => ({
        tabBarStyle: {
          height: 60,
          paddingVertical: 12,
          backgroundColor: '#2d2d2d',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.primary,
      })}>
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

// App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
