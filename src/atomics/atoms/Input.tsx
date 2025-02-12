import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import ErrorText from './TextError';

interface AtomInputProps {
  label: string;
  value: string;
  onBlur?: (value: any) => void;
  onChangeText: (text: string) => void;
  type?: 'text' | 'email-address' | 'numeric' | 'password';
  style?: ViewStyle | TextStyle;
  error?: string;
}

const AtomInput: React.FC<AtomInputProps> = ({
  label,
  value,
  style,
  type = 'text',
  onChangeText,
  onBlur,
  error,
  ...props
}) => {
  const inputProps = {
    secureTextEntry: type === 'password',
    keyboardType: type === 'text' ? 'default' : (type as 'email-address' | 'numeric' | 'default'),
    autoCapitalize: type === 'email-address' ? ('none' as const) : ('sentences' as const),
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        error={!!error}
        {...inputProps}
        {...props}
      />
      <ErrorText error={error} visible={!!error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
  },
});

export default AtomInput;
