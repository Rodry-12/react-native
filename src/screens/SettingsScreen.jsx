import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen( props ) {
  const { navigation } = props;

  goToHome = (page) => {
    navigation.navigate(page);
  }
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToHome('Home')} title='Ir a home' />
    </SafeAreaView>
  )
}