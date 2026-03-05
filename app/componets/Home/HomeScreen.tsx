import { View,StyleSheet } from 'react-native';
import CardBalanceScreen from './CardBalanceScreen';
import GreetingsScreenComponent from './GreetingsScreen';
import QuickActionsComponent from './QuickActionsComponent';

export default function HomeComponent() {
  return (
    <View style={styles.container}>
      <View>
        <GreetingsScreenComponent />
        <CardBalanceScreen />
        <QuickActionsComponent />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});