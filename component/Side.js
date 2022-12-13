import { StyleSheet, Text, View } from 'react-native';

export default function Side() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    height: '100%',
    width: 535,
  },
});
