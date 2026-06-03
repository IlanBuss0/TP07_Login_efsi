import { StyleSheet, View, SafeAreaViewBase} from 'react-native';
import {useState, useEffects} from 'react'
import {Text} from './src/components/text.jsx'
import {Img} from './src/components/img.jsx'
import {Boton} from './src/components/boton.jsx'
import {Input} from './src/components/input.jsx'
export default function App() {
  useState(nombreUsuario, setnombre)
  useState(contrasena, setContra)
  return (
    <SafeAreaViewBase style={styles.container}>
        <Text contenido = "Login App"/>
        <Img/>
        <Input tipo = "text" placeholder = "ingrese su nombre de usuario" contenido = {nombreUsuario}/>
        <Input tipo = "password" placeholder = "ingrese su contraseña" contenido = {contrasena}/>
        <Boton contenido = "INGRESAR"/>
    </SafeAreaViewBase>
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
