import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TaskScreen from './src/screens/Tasks';


export default function App() {
  return (
<Provider store={store}>
    <View style={styles.container}>
      <SafeAreaView>
      <TaskScreen/>
      </SafeAreaView>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
