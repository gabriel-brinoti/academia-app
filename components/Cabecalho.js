import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Cabecalho({ titulo, subtitulo }) { return <View style={s.area}><Text style={s.titulo}>{titulo}</Text><Text style={s.sub}>{subtitulo}</Text></View>; }
const s=StyleSheet.create({area:{paddingBottom:20},titulo:{fontSize:28,fontWeight:'800',color:'#153D31'},sub:{fontSize:14,color:'#66776D',marginTop:5}});
