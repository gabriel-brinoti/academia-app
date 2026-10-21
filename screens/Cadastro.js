import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';
export default function Cadastro({ navigation, aoCadastrar }) {
 const [form,setForm]=useState({nome:'',idade:'',modalidade:''});
 const alterar=(campo,valor)=>setForm(anterior=>({...anterior,[campo]:valor}));
 const salvar=()=>{const idade=Number(form.idade);if(!form.nome.trim()||!form.modalidade.trim()||!Number.isInteger(idade)||idade<1||idade>120){Alert.alert('Verifique os dados','Informe nome, modalidade e idade válida (1 a 120).');return;}aoCadastrar({nome:form.nome.trim(),idade,modalidade:form.modalidade.trim()});navigation.navigate('Inicio');};
 return <ScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps='handled'><Cabecalho titulo='Novo aluno' subtitulo='Preencha os dados para cadastrar'/><Text style={s.label}>Nome completo</Text><TextInput style={s.campo} value={form.nome} onChangeText={v=>alterar('nome',v)} placeholder='Ex.: João Silva'/><Text style={s.label}>Idade</Text><TextInput style={s.campo} value={form.idade} onChangeText={v=>alterar('idade',v)} placeholder='Ex.: 45' keyboardType='number-pad'/><Text style={s.label}>Modalidade</Text><TextInput style={s.campo} value={form.modalidade} onChangeText={v=>alterar('modalidade',v)} placeholder='Ex.: Funcional'/><Botao titulo='Salvar aluno' aoPressionar={salvar}/></ScrollView>;
}
const s=StyleSheet.create({container:{padding:20},label:{fontWeight:'700',color:'#153D31',marginBottom:8,marginTop:12},campo:{backgroundColor:'white',borderRadius:12,borderWidth:1,borderColor:'#DCE7DF',padding:14,fontSize:16,marginBottom:6}});
