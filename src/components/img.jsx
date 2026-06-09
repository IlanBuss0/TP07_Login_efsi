import { ImageBackground, View, StyleSheet } from "react-native"


const imgExterna = {
    uri: "https://brandemia.org/contenido/subidas/2023/01/logo-coca-cola-1941-1987-1024x576.png",
};

export default function img() {
  return (
        <View style={styles.espaciador}>
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
  espaciador: {
    width: "100%",
    height: 153,
    marginLeft: "15%",
    marginTop: "20%",
    paddingBottom:"75%"
  },
})
