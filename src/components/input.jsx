import { TextInput, View, StyleSheet } from "react-native"

const Input = (props) => {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.contenido}
        onChangeText={props.setUsu}
        secureTextEntry={props.seguro}
        placeholderTextColor="#000000"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: "86%",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 30,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#7b2cff",
    paddingHorizontal: 8,
    fontSize: 10,
    color: "#000000",
  },
})

export default Input
