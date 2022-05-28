import { View, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from '../StyledText'

const RepositoryStats = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  const parseThousand = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
  }

  return (
    <View style={styles.flexRow}>
         <View>
            <StyledText align='center' fontWeight='bold'>{parseThousand(forksCount)}</StyledText>
            <StyledText align='center'>Forks</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{parseThousand(stargazersCount)}</StyledText>
            <StyledText align='center'>Stars</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{ratingAverage}</StyledText>
            <StyledText align='center'>Rating</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{reviewCount}</StyledText>
            <StyledText align='center'>Review</StyledText>
        </View>
    </View>
  )
}

export default RepositoryStats

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
