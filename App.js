import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useState, useEffects } from 'react'
import Text from './src/components/text.jsx'
import Img from './src/components/img.jsx'
import Boton from './src/components/boton.jsx'
import Input from './src/components/input.jsx'
export default function App() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const USUARIO_VALIDO = "hola@gmail.com";
  const CONTRASENA_VALIDA = "1234567";

  const validarLogin = () => {
    if (nombreUsuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA) {
      setMensaje("Acceso concedido");
    } else {
      setMensaje("Acceso denegado");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text contenido="Login App" />

      <Img/>

      <Input
        placeholder="hola@gmail.com"
        contenido={nombreUsuario}
        setUsu={setNombreUsuario}
        seguro={false}
      />

      <Input
        placeholder="********"
        contenido={contrasena}
        setUsu={setContrasena}
        seguro={true}
      />

      <Boton contenido="INGRESAR" onPress={validarLogin} />

      {mensaje !== "" && <Text contenido={mensaje} />}
    </SafeAreaView>
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
