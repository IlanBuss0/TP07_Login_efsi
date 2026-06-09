import { TextInput, View, StyleSheet } from "react-native"
const Input = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.contenido}
        onChangeText={props.setUsu}
        secureTextEntry={props.seguro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width: "86%",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#7b2cff",
    paddingHorizontal: 10,
    fontSize: 12,
  },
});
export default Input
