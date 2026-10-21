import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { alunosIniciais } from './data/alunos';
import Home from './screens/Home';
import Detalhes from './screens/Detalhes';
import Cadastro from './screens/Cadastro';
const Stack = createNativeStackNavigator();
export default function App() {
  const [alunos, setAlunos] = useState(alunosIniciais);
  const adicionarAluno = (novoAluno) => setAlunos(anteriores => [...anteriores, { ...novoAluno, id: `${Date.now()}`, status: 'Ativo' }]);
  return <SafeAreaProvider><NavigationContainer><Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#153D31'},headerTintColor:'#FFF',contentStyle:{backgroundColor:'#F5F8F5'}}}>
    <Stack.Screen name='Inicio' options={{title:'Academia Funcional'}}>{props => <Home {...props} alunos={alunos}/>}</Stack.Screen>
    <Stack.Screen name='Detalhes' component={Detalhes} options={{title:'Detalhes do aluno'}}/>
    <Stack.Screen name='Cadastro' options={{title:'Cadastrar aluno'}}>{props => <Cadastro {...props} aoCadastrar={adicionarAluno}/>}</Stack.Screen>
  </Stack.Navigator></NavigationContainer></SafeAreaProvider>;
}
