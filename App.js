import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/Components/Title/index';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nicole</Text>
      <Title/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
