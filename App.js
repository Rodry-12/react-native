import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginForm from './src/components/Login/LoginForm';
import Saludar from './src/components/Saludar';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {
        // <View style={styles.container}>
        // <Text>Curso react native</Text>
        
        // <LoginForm />
        // <Saludar firsname="Camilo" lastname="Marin" />
        // </View>
        // <NavigationStack />
        // <NavigationTab />
      }
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
