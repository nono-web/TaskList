import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TaskScreen from './src/screens/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <TaskScreen/>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
