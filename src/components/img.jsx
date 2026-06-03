import { ImageBackground, View } from "react-native"



const img = () =>{
    const imgExterna = {url: '../img/Coca-Cola-logo.png'}
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