import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [heartColor, setHeathColor] = useState('gray');

  const toggleHeartColor = () => {
    setHeathColor((prevColor) => (prevColor === 'red' ? 'gray' : 'red'));
  };

  const showAlert = () => {
    try {
      alert('Clicou mesmo!');
    } catch (error) {
      console.error('Error no showing alert' + error);
    }
  };
  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/minion.png')} //caminho da imagem
        style={{ width: 200, height: 200 }} //tamanho da imagem 
      />

      <Text>matheusin1234567</Text>
      
      <TextInput 
        style= {styles.input}
        placeholder='Escreva algo...'
        placeholderTextColor='#544b4b'
      />

      <TouchableOpacity onPress={toggleHeartColor}>
        <AntDesign name="heart" size={24} color={heartColor} />
      </TouchableOpacity>

      <TouchableOpacity onPress={showAlert} style={styles.customButton}>
        <Text style={styles.buttonText}>Clica ai</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },

  customButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: '600'
  },

  input: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 7,
    marginVertical: 10,
    borderRadius: 5
  }
});
