import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface AtomCardProps {
  style?: ViewStyle | TextStyle;
  children: React.ReactNode;
}

const AtomCard: React.FC<AtomCardProps> = ({ style, children }) => {
  const { colors } = useTheme();
  return (
    <Card style={[styles.card, { backgroundColor: colors.background }, style]}>{children}</Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default AtomCard;
