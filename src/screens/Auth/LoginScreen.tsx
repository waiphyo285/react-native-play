import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import SnackError from '../../atomics/organisms/SnackError';
import MoleculeLoginForm from '../../atomics/molecules/LoginForm';
import useErrorStore from '../../store/errorStore';

const LoginScreen = () => {
  const error = useErrorStore((state: any) => state.error);

  return (
    <ImageBackground
      source={require('../../assets/auth/login-cover.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <SnackError error={error} />
        <MoleculeLoginForm />
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
