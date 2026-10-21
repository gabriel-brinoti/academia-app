import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
export default function Botao({ titulo, aoPressionar, secundario=false }) { return <Pressable accessibilityRole='button' onPress={aoPressionar} style={[s.botao,secundario&&s.secundario]}><Text style={[s.texto,secundario&&s.textoSec]}>{titulo}</Text></Pressable>; }
const s=StyleSheet.create({botao:{backgroundColor:'#1E7654',padding:16,borderRadius:14,alignItems:'center',marginVertical:6,minHeight:52},secundario:{backgroundColor:'#E4F1E9'},texto:{color:'white',fontWeight:'700',fontSize:16},textoSec:{color:'#1E7654'}});
