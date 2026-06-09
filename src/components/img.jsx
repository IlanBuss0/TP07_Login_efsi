import { ImageBackground, View, StyleSheet } from "react-native"


const imgExterna = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzf4PCSdxGhFsPGI2KNwryB6l9LCrC3t0jQ&s",
};

export default function img() {

    return (
        <View>
            <ImageBackground
                source={imgExterna}
                resizeMode={"cover"}
                style={{ width: 280, height: 200 }}
            >
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: "70%",
    height: 120,
  },
});