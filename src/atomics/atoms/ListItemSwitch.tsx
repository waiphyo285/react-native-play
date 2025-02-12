import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, List, useTheme } from 'react-native-paper';

interface ToggleSwitchProps {
  title: string;
  value: boolean;
  onToggle: (value: any) => void;
}

const AtomToggleSwitch: React.FC<ToggleSwitchProps> = ({ title, value, onToggle }) => {
  const { colors } = useTheme();
  return (
    <List.Item
      title={title}
      left={() => <List.Icon icon={'theme-light-dark'} color={colors.primary} />}
      right={() => <Switch value={value} onValueChange={onToggle} />}
      titleStyle={[styles.listItemTitle, { color: colors.onSurface }]}
    />
  );
};

const styles = StyleSheet.create({
  listItemTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
});

export default AtomToggleSwitch;
