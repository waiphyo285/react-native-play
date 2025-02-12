import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/onboard/splash-cover.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <ActivityIndicator animating={true} size="large" color={'#fdfdfd'} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#f9f9f9',
    fontSize: 18,
    marginTop: 12,
  },
});

export default SplashScreen;
