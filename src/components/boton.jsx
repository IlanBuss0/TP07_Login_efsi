import {Pressable, Text, View, StyleSheet} from "react-native"
const boton = (props) =>{
    return(
        <View>
            <Pressable onPress={props.onPress}>
        <Text>{props.contenido}</Text>
      </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  contenedor: {
    width: "86%",
    marginTop: 18,
    marginBottom: 10,
  },
  boton: {
    width: "100%",
    height: 42,
    backgroundColor: "#8b4df6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  texto: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default boton