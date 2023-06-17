import { Button, Text, TextInput, View } from "react-native"

export default function LoginForm () {
  return (
    <View>
      <TextInput placeholder="Email"/>
      <TextInput placeholder="Contraseña" secureTextEntry={true} />

      <Button title="enviar" onPress={() => console.log("Enviado")} />
    </View>
  )
}
