import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/palmiye.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hoş Geldinizz</Text>
       
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka plana bir opaklık ekleyebilirsiniz
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
