import { View,StyleSheet } from 'react-native';
import CardBalanceScreen from './CardBalanceScreen';
import GreetingsScreenComponent from './GreetingsScreen';
import QuickActionsComponent from './QuickActionsComponent';
import TransactionHistoryComponent from './TransactionHistoryComponent';

export default function HomeComponent() {
  return (
    <View style={styles.container}>
      <View>
        <GreetingsScreenComponent />
        <CardBalanceScreen />
        <QuickActionsComponent />
        <TransactionHistoryComponent />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});