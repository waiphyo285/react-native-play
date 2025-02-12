import React, { useState } from 'react';
import { FlatList, StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { useTheme, Text, Portal, Modal } from 'react-native-paper';
import MoleculeGameCard from '@/atomics/molecules/GameCard';

const DATA = [
  {
    id: '1',
    title: 'Mini Game 1',
    description: 'This is a description for game 1.',
    image: 'https://picsum.photos/700',
  },
  {
    id: '2',
    title: 'Mini Game 2',
    description: 'This is a description for game 2.',
    image: '../../assets/games/roll-dice-cover.jpg',
  },
];

const OrganismGameList = ({ navigation }: any) => {
  const { dark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const navigateToGame = () => {
    navigation.navigate('RollDice');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }: any) => (
          <MoleculeGameCard
            item={item}
            onPressPlay={navigateToGame}
            onPressDetails={() => openModal(item)}
          />
        )}
      />

      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={closeModal}
          contentContainerStyle={[
            styles.modalContainer,
            { backgroundColor: dark ? '#333333' : '#d3d3d3' },
          ]}>
          <KeyboardAvoidingView behavior="padding" style={styles.modalContent}>
            {selectedItem && (
              <>
                <Text variant="titleLarge">{selectedItem.title}</Text>
                <Text variant="bodyLarge">{selectedItem.description}</Text>
              </>
            )}
          </KeyboardAvoidingView>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  modalContainer: {
    padding: 20,
    marginTop: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {
    paddingVertical: 16,
  },
});

export default OrganismGameList;
