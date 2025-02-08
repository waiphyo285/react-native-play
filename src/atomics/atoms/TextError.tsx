import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextErrorProps {
  error: any;
  visible: any;
}

const TextError = ({ error, visible }: TextErrorProps) => {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginBottom: 5,
  },
});

export default TextError;
