import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from '@/screens/Auth/LoginScreen';
import AppNavigator from './AppNavigator';

const AppWrapper = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {!isLoggedIn ? <LoginScreen /> : <AppNavigator />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppWrapper;
