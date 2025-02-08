import React from 'react';
import { View, StyleSheet } from 'react-native';
import SnackError from '../../atomics/organisms/SnackError';
import MoleculeLoginForm from '../../atomics/molecules/LoginForm';
import useErrorStore from '../../store/errorStore';

const LoginScreen = () => {
  const error = useErrorStore((state: any) => state.error);
  return (
    <View style={styles.container}>
      <SnackError error={error} />
      <MoleculeLoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export default LoginScreen;
