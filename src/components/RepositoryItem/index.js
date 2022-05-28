import { Image, View, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from '../StyledText'
import RepositoryStats from '../RepositoryStats'
import { theme } from '../../theme'

const RepositoryItemsHeader = ({ fullname, description, language, ownerAvatar }) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: ownerAvatar }}
        />
      </View>
      <View style={{ paddingLeft: 10, flex: 1 }}>
        <StyledText fontWeight='bold' fontSize='subheading' >{fullname}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = ({ repository }) => {
  const { fullname, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatar } = repository

  return (
    <View style={styles.container}>
        <RepositoryItemsHeader
          fullname={fullname}
          description={description}
          language={language}
          ownerAvatar={ownerAvatar}
        />
        <RepositoryStats
          forksCount={forksCount}
          stargazersCount={stargazersCount}
          ratingAverage={ratingAverage}
          reviewCount={reviewCount}
        />
    </View>
  )
}

export default RepositoryItem

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  image: {
    borderRadius: 10,
    height: 48,
    width: 48
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.white,
    marginVertical: 4,
    overflow: 'hidden',
    padding: 4
  }
})
