import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';


const logoImage = require('@/assets/images/logo.png');
const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
    if (username && password) {
      Alert.alert('Login', `Usuário: ${username}`);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const handleNavigateToSignUp = () => {
    // Você ainda usa o NOME DA ROTA definido em _layout.tsx
    router.push('./signUp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={(logoImage)} 
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário:"
          placeholderTextColor="#A0A0A0"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha:"
          placeholderTextColor="#A0A0A0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {/* Use um ícone aqui. Exemplo com texto: */}
          <Text style={styles.eyeIconText}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
          {/* Exemplo com react-native-vector-icons:
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#A0A0A0" />
          */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleNavigateToSignUp}>
        <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;