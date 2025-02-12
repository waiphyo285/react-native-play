import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import useErrorStore from '@/store/errorStore';
import LoginForm from '@/atomics/molecules/LoginForm';
import SnackError from '@/atomics/organisms/SnackError';

const LoginScreen = () => {
  const error = useErrorStore((state: any) => state.error);

  return (
    <ImageBackground
      source={require('../../assets/auth/login-cover.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <LoginForm />
        <SnackError error={error} />
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
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default LoginScreen;
