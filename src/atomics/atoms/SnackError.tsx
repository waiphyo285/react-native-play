import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

interface SnackErrorProps {
  error?: string;
}

const SnackError: React.FC<SnackErrorProps> = ({ error }) => {
  const [visible, setVisible] = useState(!!error);
  const onDismiss = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        action={{ label: 'Dismiss', onPress: onDismiss }}
        duration={3000}>
        {error}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

export default SnackError;
