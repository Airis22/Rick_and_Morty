import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <ImageBackground
            source={require("../assets/images/fondo.jpg")}
            style={styles.background} 
            resizeMode="cover"
        >
            <Text style={styles.titulo}>Rick and Morty</Text>

            <Text style={styles.titulo2}>¿Qué te gustaria ver?</Text>

            <View style={styles.contend}>
                
                <Link href={"/(characters)"} style={styles.button}>
                    <Text style={styles.text}>Personajes</Text>
                </Link>
                <Link href={"/(episodes)"} style={styles.button}>
                    <Text style={styles.text}>Episodios</Text>
                </Link>
                <Link href={"/(locations)"} style={styles.button}>
                    <Text style={styles.text}>Locations</Text>
                </Link>
                <Link href={"/info"} style={styles.button}>
                    <Text style={styles.text}>Acerca De</Text>
                </Link>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        alignItems: "center",
        height: "auto"
    },
    contend: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    titulo: {
        fontSize: 50,
        fontFamily: "Creepster", 
        color: "limegreen",
        textShadowColor: "white",        textShadowRadius: 20,
        marginTop: 50,
    },
    titulo2: {
        fontSize: 30,
        fontFamily: "Creepster",
        color: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Creepster", 
        
    },
    button: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        padding: 40,
        borderRadius: 10,
        marginTop: 10,
    }
});
