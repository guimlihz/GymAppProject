// app/signUp.tsx

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './signUpStyles'; // Criaremos este arquivo de estilo

// Se você for usar ícones de alguma biblioteca, importe-os aqui. Ex:
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const logoImage = require('@/assets/images/logo.png');

const SignUpScreen: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }
    // Lógica de cadastro aqui
    Alert.alert('Cadastro', `Usuário ${username} cadastrado com sucesso!`);
    // Poderia navegar para outra tela ou voltar para o login
    // router.push('/login'); // ou router.back();
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {/*
        Se você quiser que "Tela de cadastro" seja o título do header da Stack,
        você pode configurar isso no RootLayout.tsx para a screen 'signUp'.
        <Stack.Screen options={{ title: 'Tela de cadastro', headerShown: true }} />
        Caso contrário, se o header estiver oculto, adicione um Text aqui.
      */}
      <Text style={styles.headerTitle}>Tela de cadastro</Text>

      {/* Substitua pelo seu componente de Logo ou Image */}
      <Image
        // source={logoImage} // Descomente e use sua logo
        source={{logoImage}} // Placeholder
        style={styles.logo}
      />

      <Text style={styles.sectionTitle}>Informações de login:</Text>

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
          placeholder="Email:"
          placeholderTextColor="#A0A0A0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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
          <Text style={styles.eyeIconText}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha:"
          placeholderTextColor="#A0A0A0"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
        >
          <Text style={styles.eyeIconText}>{isConfirmPasswordVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Informações do usuário:</Text>

      <View style={styles.rowInputContainer}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Idade:"
          placeholderTextColor="#A0A0A0"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.smallInput, styles.middleInput]}
          placeholder="Peso:"
          placeholderTextColor="#A0A0A0"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Altura:"
          placeholderTextColor="#A0A0A0"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Meta:"
          placeholderTextColor="#A0A0A0"
          value={goal}
          onChangeText={setGoal}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Disponibilidade de dias:"
          placeholderTextColor="#A0A0A0"
          value={availability}
          onChangeText={setAvailability}
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      {<TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>}
    </ScrollView>
  );
};

export default SignUpScreen;