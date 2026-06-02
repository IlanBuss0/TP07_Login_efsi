import { ImageBackground, View } from "react-native"

const imgExterna = {url: '../img/Coca-Cola-logo.png'}

const img = (imgExterna) =>{
    return(
        <View>
            <ImageBackground>
                source = {ImgExterna}
                resizeMode = "cover"
                style = {styles.backgroundImage}
            </ImageBackground>
        </View>
    )
}

export default img