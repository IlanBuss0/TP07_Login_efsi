import { StyleSheet, Text, View, SafeAreaViewBase} from 'react-native';
import {Text} from './src/components/text'
import {Img} from './src/components/img'
import {Boton} from './src/components/boton'
import {Input} from './src/components/input'
export default function App() {
  useState(nombreUsuario, setnombre)
  useState(contrasena, setContra)
  
  return (
    <SafeAreaViewBase style={styles.container}>
        <Text contenido = "Login App"/>
        <Img/>
        <Input tipo = "text" placeholder = "ingrese su nombre de usuario" contenido = {nombreUsuario}/>
        <Input/>
        <Boton/>
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
