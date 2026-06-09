import {Pressable, Text, View} from "react-native"
const boton = (props) =>{
    return(
        <View>
            <Pressable onPress={props.onPress}>
        <Text>{props.contenido}</Text>
      </Pressable>
        </View>
    )
}

export default boton