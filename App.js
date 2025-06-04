import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
  const [heartColor, setHeartColor] = useState('gray');

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleHeartColor = () => {
    setHeartColor((prevColor) => (prevColor === 'red' ? 'gray' : 'red'));
  };

  const handleLogin = () => {
    const adminUser = 'admin';
    const adminPass = 'admin';

    if (username === adminUser && password === adminPass) {
      alert('Login efetuado com sucesso!');
      setErrorMessage('');
    } else {
      setErrorMessage('Usuário ou senha inválidos.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  // const showAlert = () => {
  //   try {
  //     alert('Clicou mesmo!');
  //   } catch (error) {
  //     console.error('Error no showing alert' + error);
  //   }
  // };

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/minion.png')} //caminho da imagem
        style={[styles.image, { width: 200, height: 200 }]} //tamanho da imagem 
      />

      <Text>matheusin1234567</Text>

      <TextInput
        style={styles.input}
        placeholder='Usuário...'
        placeholderTextColor='#544b4b'
        value={username}
        onChangeText={setUsername}
      />

      {/* container do input de senha + o botão de ocultar e mostrar a senha do admin */}

      <View style={styles.passwordContainer}>
        <TextInput  
          style={[styles.input, { flex: 1 }]}
          placeholder='Senha...'
          placeholderTextColor='#544b4b'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />      

        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
          <AntDesign name={showPassword ? "eye" : "eyeo"} size={24} color={showPassword ? '#bbb' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* mensagem de erro abaixo da senha */}
      {errorMessage !== '' && (<Text style={styles.errorText}>{errorMessage}</Text>)}
      
      {/* ícone do coração */}
      <TouchableOpacity onPress={toggleHeartColor} style={{ padding: 8 }}>
        <AntDesign name="heart" size={24} color={heartColor} />
      </TouchableOpacity>
      
      {/* botã de login */}
      <TouchableOpacity onPress={handleLogin} style={styles.customButton}>
        <Text style={styles.buttonText}>Login</Text>
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

  input: {
    height:40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 7,
    marginVertical: 10,
    borderRadius: 5
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginVertical: 10,
  },

  eyeButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }

  customButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },

  errorText: {
    color: 'red',
    marginTop: -5,
    marginBottom: 10
  }
});
