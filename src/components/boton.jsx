import { Pressable, Text, View, StyleSheet } from "react-native"

const boton = (props) => {
  return (
    <View style={styles.contenedor}>
      <Pressable style={styles.boton} onPress={props.onPress}>
        <Text style={styles.texto}>{props.contenido}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: "86%",
    marginTop: 20,
    marginBottom: 0,
  },
  boton: {
    width: "100%",
    height: 30,
    backgroundColor: "#8d54f6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  texto: {
    color: "#ffffff",
    fontSize: 13,
  },
})

export default boton
