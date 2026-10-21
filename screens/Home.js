import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import CardAluno from '../components/CardAluno';
import Botao from '../components/Botao';
export default function Home({ navigation, alunos }) {
 const [busca,setBusca]=useState(''); const [quantidade,setQuantidade]=useState(0);
 const filtrados=alunos.filter(aluno=>aluno.nome.toLowerCase().includes(busca.trim().toLowerCase()));
 useEffect(()=>{setQuantidade(filtrados.length);},[busca,alunos]);
 return <View style={s.container}><Cabecalho titulo='Seus alunos' subtitulo='Acompanhe os cadastros da academia'/><Text style={s.contagem}>{`${quantidade} aluno(s) encontrado(s)`}</Text><TextInput placeholder='Pesquisar por nome...' value={busca} onChangeText={setBusca} style={s.campo} accessibilityLabel='Pesquisar alunos'/><Botao titulo='+ Novo aluno' aoPressionar={()=>navigation.navigate('Cadastro')}/><FlatList data={filtrados} keyExtractor={item=>item.id} renderItem={({item})=><CardAluno aluno={item} aoPressionar={()=>navigation.navigate('Detalhes',{aluno:item})}/>} ListEmptyComponent={<Text style={s.vazio}>Nenhum aluno encontrado.</Text>} contentContainerStyle={{paddingTop:14,paddingBottom:20}}/></View>;
}
const s=StyleSheet.create({container:{flex:1,padding:20},contagem:{color:'#1E7654',fontWeight:'700',marginBottom:12},campo:{backgroundColor:'white',borderWidth:1,borderColor:'#DCE7DF',borderRadius:12,padding:14,fontSize:16},vazio:{textAlign:'center',color:'#66776D',padding:28}});
