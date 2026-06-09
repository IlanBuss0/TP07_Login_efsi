import { Text, View, StyleSheet } from "react-native"

const text = (props) => {
  const estilosTexto = [styles.textoNormal]

  if (props.tipo === "titulo") {
    estilosTexto.push(styles.titulo)
  }

  if (props.tipo === "link") {
    estilosTexto.push(styles.link)
  }

  if (props.tipo === "mensaje") {
    estilosTexto.push(styles.mensaje)
  }

  return (
    <View style={props.tipo === "titulo" ? styles.header : styles.contenedorTexto}>
      <Text style={estilosTexto}>{props.contenido}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 67,
    paddingTop: 22,
    backgroundColor: "#6126f5",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorTexto: {
    alignItems: "center",
  },
  textoNormal: {
    color: "#000000",
    fontSize: 13,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },
  link: {
    color: "#000000",
    fontSize: 11,
    marginTop: 10,
    fontWeight: "600",
  },
  mensaje: {
    color: "#000000",
    fontSize: 13,
    marginTop: 12,
    fontWeight: "bold",
  },
})

export default text
