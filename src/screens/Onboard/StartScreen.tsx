import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTheme } from '@/themes';

const getThemeColors = (theme: any) => ({
  one: theme.colors.primary,
  two: theme.colors.secondary,
  three: theme.colors.tertiary,
});

const slides = [
  {
    key: 'one',
    title: 'Welcome to the App',
    text: 'An introduction to the app and its features.',
    backgroundColor: getThemeColors(CustomTheme).one,
  },
  {
    key: 'two',
    title: 'Easy Navigation',
    text: 'Navigate through the app with ease and find what you need quickly.',
    backgroundColor: getThemeColors(CustomTheme).two,
  },
  {
    key: 'three',
    title: 'Get Started',
    text: "Let's begin! Set up your profile and explore the app's features.",
    backgroundColor: getThemeColors(CustomTheme).three,
  },
];

const IntroSliderScreen = ({ onDone }: { onDone: () => void }) => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fdfdfd',
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    color: '#f9f9f9',
  },
});

export default IntroSliderScreen;
