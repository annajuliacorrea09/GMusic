import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../theme/colors';

export default function MusicPlayer() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.content}></View>
      <text style={styles.eyebrow}>TOCANDO AGORA</text>
      <text style={styles.title}>GMusic</text>
      <text style={styles.description}>
        Nosso player começa aqui
      </text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})