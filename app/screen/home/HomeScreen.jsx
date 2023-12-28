import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 10,
    paddingHorizontal: 20,
    zIndex: 10,
  }
})