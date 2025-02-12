import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import useAuthStore from '@/store/authStore';
import useConfigStore from '@/store/configStore';
import configService from '@/services/configService';

import ListItem from '@/atomics/atoms/ListItem';
import ToggleSwitch from '@/atomics/atoms/ListItemSwitch';
import LanguageSelector from '@/atomics/organisms/LanguageSelector';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const user = useAuthStore(state => state.user);
  const darkTheme = useConfigStore(state => state.darkTheme);

  const handleDarkTheme = async (value: boolean) => {
    configService.setDarkTheme({ darkTheme: value });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.sectionContainer,
          { backgroundColor: colors.surface, borderColor: colors.primary },
        ]}>
        <ListItem title={t('email')} description={user?.email || 'No email'} icon="email" />
      </View>

      <View
        style={[
          styles.sectionContainer,
          { backgroundColor: colors.surface, borderColor: colors.primary },
        ]}>
        <ToggleSwitch title={t('dark_mode')} value={darkTheme} onToggle={handleDarkTheme} />
      </View>

      <View
        style={[
          styles.sectionContainer,
          { backgroundColor: colors.surface, borderColor: colors.primary },
        ]}>
        <LanguageSelector />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionContainer: {
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default ProfileScreen;
