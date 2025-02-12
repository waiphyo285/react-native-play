import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, RadioButton, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  return (
    <List.Section>
      <List.Item
        title={t('language')}
        left={() => <List.Icon icon="translate" color={colors.primary} />}
        titleStyle={[styles.listItemTitle, { color: colors.onSurface }]}
      />
      <RadioButton.Group onValueChange={handleLanguageChange} value={selectedLanguage}>
        <List.Item
          title={t('english')}
          left={() => <RadioButton value="en" />}
          titleStyle={{ color: colors.onSurface }}
          style={styles.radioItem}
        />
        <List.Item
          title={t('myanmar')}
          left={() => <RadioButton value="my" />}
          titleStyle={{ color: colors.onSurface }}
          style={styles.radioItem}
        />
      </RadioButton.Group>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  listItemTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  radioItem: {
    paddingVertical: 2,
  },
});

export default LanguageSelector;
