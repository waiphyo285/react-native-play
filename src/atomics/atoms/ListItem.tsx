import React from 'react';
import { StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

interface AtomListItemProps {
  icon: string;
  title: string;
  description?: string;
}

const AtomListItem: React.FC<AtomListItemProps> = ({ title, description, icon }) => {
  const { colors } = useTheme();
  return (
    <List.Item
      title={title}
      description={description}
      left={() => <List.Icon icon={icon} color={colors.primary} />}
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

export default AtomListItem;
