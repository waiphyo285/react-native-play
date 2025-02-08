import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface AtomButtonProps {
  text: string;
  mode?: 'text' | 'outlined' | 'contained';
  color?: string;
  style?: ViewStyle | TextStyle;
  onPress: () => void;
}

const AtomButton: React.FC<AtomButtonProps> = ({
  text,
  mode = 'contained',
  color,
  style,
  onPress,
}) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      buttonColor={color}
      style={[styles.button, style]}
      labelStyle={styles.text}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginBottom: 16,
    elevation: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'uppercase',
  } as TextStyle,
});

export default AtomButton;
