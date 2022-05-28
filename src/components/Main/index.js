import { View } from 'react-native'
import React from 'react'
import RepositoryList from '../RepositoryList'
import AppBar from '../AppBar'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
     <RepositoryList />
    </View>
  )
}

export default Main
