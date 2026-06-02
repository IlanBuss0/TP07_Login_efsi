import {Pressable, Text, View} from "react-native"
const boton = (contenido) =>{
    return(
        <View>
            <Pressable onPress={handlePress}>
                <Text>{contenido}</Text>
            </Pressable>
        </View>
    )
}

export default boton