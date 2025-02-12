import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import AtomCard from '@/atomics/atoms/Card';
import AtomButton from '@/atomics/atoms/Button';

interface GameCardProps {
  item: any;
  onPressDetails: () => void;
  onPressPlay: () => void;
}

const MoleculeGameCard: React.FC<GameCardProps> = ({ item, onPressDetails, onPressPlay }) => {
  const { t } = useTranslation();
  return (
    <AtomCard style={styles.gameCard}>
      <Card.Cover source={{ uri: item.image }} style={styles.gameImage} resizeMode="contain" />
      <Card.Content>
        <Text variant="titleMedium" style={styles.gameTitle}>
          {item.title}
        </Text>
        <Text variant="bodyMedium" style={styles.gameDesc}>
          {item.description}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.buttonGroup}>
        <AtomButton text={t('btn_details')} onPress={onPressDetails} />
        <AtomButton text={t('ban_play_now')} style={styles.playButton} onPress={onPressPlay} />
      </Card.Actions>
    </AtomCard>
  );
};

const styles = StyleSheet.create({
  gameCard: {
    marginBottom: 12,
    overflow: 'hidden',
  },
  gameImage: {
    borderRadius: 0,
    marginBottom: 12,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
  },
  gameDesc: {
    fontSize: 18,
    fontWeight: 'thin',
    marginBottom: 12,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playButton: {
    marginHorizontal: 8,
  },
});

export default MoleculeGameCard;
