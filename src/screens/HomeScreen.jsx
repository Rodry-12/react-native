import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

export default function HomeScreen( props ) {
  const { navigation } = props;

  goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title='Ir a ajustes'/>
      <Button onPress={() => navigation.openDrawer()} title='Abrir Drawer'/>
    </SafeAreaView>
  )
}