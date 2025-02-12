import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import useAuthStore from '@/store/authStore';
import useConfigStore from '@/store/configStore';

import authService from '@/services/authService';
import configService from '@/services/configService';

import AtomButton from '@/atomics/atoms/Button';
import ListItem from '@/atomics/atoms/ListItem';
import ToggleSwitch from '@/atomics/atoms/ListItemSwitch';
import AtomConfirmModal from '@/atomics/atoms/Confirmation';
import LanguageSelector from '@/atomics/organisms/LanguageSelector';

const ProfileScreen = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const user = useAuthStore(state => state.user);
  const darkTheme = useConfigStore(state => state.darkTheme);
  const showModal = useConfigStore(state => state.showModal);

  const handleDarkTheme = (value: boolean) => {
    configService.setDarkTheme({ darkTheme: value });
  };

  const handleModalToggle = (value: boolean) => {
    configService.setShowModal({ showModal: value });
  };

  const handleConfirmLogout = () => {
    configService.setShowModal({ showModal: false });
    authService.logout({ email: user?.email as string });
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

      <View style={[styles.logoutContainer]}>
        <AtomButton
          text={t('btn_logout')}
          color={colors.tertiary}
          onPress={() => handleModalToggle(true)}
        />
      </View>

      <AtomConfirmModal
        visible={showModal}
        title={t('confirm')}
        message={t('msg_logout')}
        confirmText={t('btn_logout')}
        cancelText={t('btn_cancel')}
        onConfirm={handleConfirmLogout}
        onCancel={() => handleModalToggle(false)}
      />
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
  logoutContainer: {
    marginVertical: 6,
    paddingVertical: 6,
  },
});

export default ProfileScreen;
