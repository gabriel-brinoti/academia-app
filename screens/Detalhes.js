import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';
export default function Detalhes({ route, navigation }) { const { aluno }=route.params; return <View style={s.container}><Cabecalho titulo={aluno.nome} subtitulo='Informações do aluno'/><View style={s.card}><Text style={s.label}>Idade</Text><Text style={s.valor}>{`${aluno.idade} anos`}</Text><Text style={s.label}>Modalidade</Text><Text style={s.valor}>{aluno.modalidade}</Text><Text style={s.label}>Situação</Text><Text style={s.valor}>{aluno.status}</Text></View><Botao titulo='Voltar para alunos' secundario aoPressionar={()=>navigation.goBack()}/></View>; }
const s=StyleSheet.create({container:{flex:1,padding:20},card:{backgroundColor:'white',padding:22,borderRadius:18,borderWidth:1,borderColor:'#E5ECE8'},label:{color:'#65766C',fontSize:14,marginBottom:4},valor:{color:'#153D31',fontSize:19,fontWeight:'700',marginBottom:20}});
