import { ImageBackground, View } from "react-native"

const imgExterna = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzf4PCSdxGhFsPGI2KNwryB6l9LCrC3t0jQ&s'}
const imglocal =require('/assets/background/background-react nng',

export default function img(){
    
    return(
        <View>
            <ImageBackground>
                source = {ImgExterna}
                resizeMode = {"cover"}
                style = {styles.backgroundImage}
            </ImageBackground>
        </View>
    )
}