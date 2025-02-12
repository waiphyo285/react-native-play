import React from 'react';
import { Portal, Dialog, Button, Text } from 'react-native-paper';

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

const AtomConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text> {message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>{cancelText}</Button>
          <Button onPress={onConfirm}>{confirmText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AtomConfirmModal;
