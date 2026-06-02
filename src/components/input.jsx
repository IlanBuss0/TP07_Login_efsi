import { TextInput, View } from "react-native"
const input = (tipo, placeholder, setUsu, contenido) =>{
    return(
        <View>
            <TextInput type={tipo} placeholder={placeholder} onChangeText={setUsu} value={contenido}/>
        </View>
    )
}

export default input
