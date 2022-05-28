import { Text, FlatList } from 'react-native'
import React from 'react'
import repositories from '../../data/repositories'
import RepositoryItem from '../RepositoryItem'

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repository }) => (
        <RepositoryItem
          repository={repository}
        />
      )}
      keyExtractor={repository => repository.id}
      ItemSeparatorComponent={() => <Text> </Text>}
    >
    </FlatList>
  )
}

export default RepositoryList
