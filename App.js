import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import Texto from './src/components/text.jsx'
import Img from './src/components/img.jsx'
import Boton from './src/components/boton.jsx'
import Input from './src/components/input.jsx'

export default function App() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const USUARIO_VALIDO = "simon@galaxies.dev";
  const CONTRASENA_VALIDA = "1234567";

  const validarLogin = () => {
    if (nombreUsuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA) {
      setMensaje("Acceso concedido");
    } else {
      setMensaje("Acceso denegado");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Texto tipo="titulo" contenido="Login App (Apellido, Apellido)" />

      <Img />

      <View style={styles.formulario}>
        <Input
          placeholder="simon@galaxies.dev"
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

        <Texto tipo="link" contenido="Olvidaste la clave?" />
        <Texto tipo="link" contenido="Crear Cuenta" />

        {mensaje !== "" && <Texto tipo="mensaje" contenido={mensaje} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  formulario: {
    width: "100%",
    alignItems: "center",
  },
});
