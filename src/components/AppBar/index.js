import { View, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from '../StyledText'
import { theme } from '../../theme'
import Constans from 'expo-constants'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' style={styles.text}>Repositories</StyledText>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: Constans.statusBarHeight + 10
  },
  text: {
    color: theme.appBar.white
  }
})
