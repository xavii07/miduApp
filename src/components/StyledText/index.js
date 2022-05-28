import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../theme'

const StyledText = ({ align, children, color, fontWeight, fontSize, style, ...restOfProps }) => {
  const styleText = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.alignCenter,
    style
  ]

  return (
      <Text
        style={styleText}
        {...restOfProps}
    >{children}</Text>
  )
}

export default StyledText

const styles = StyleSheet.create({
  alignCenter: {
    textAlign: 'center'
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.secondary
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal
  }
})
