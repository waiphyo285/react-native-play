import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import GameList from '@/atomics/organisms/GameList';

const HomeScreen = ({ navigation }: any) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GameList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
