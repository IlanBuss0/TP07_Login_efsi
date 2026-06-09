import { Text, View, StyleSheet } from "react-native"
const text = (props) =>{
    return(
        <View>
            <Text>{props.contenido}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  textoNormal: {
    color: "#000000",
    fontSize: 13,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    color: "#000000",
    fontSize: 12,
    marginTop: 8,
  },
  mensaje: {
    color: "#000000",
    fontSize: 13,
    marginTop: 12,
    fontWeight: "bold",
  },
}); 

export default text