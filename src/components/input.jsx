import { TextInput, View } from "react-native"
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
export default Input
