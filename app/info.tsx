import { Link } from "expo-router";
import { Image, Linking, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function InfoScreen() {
    return (
        <ScrollView>
        <ImageBackground
            source={require("../assets/images/fondo_AcercaDe.jpg")}
            style={styles.background} 
            resizeMode="cover"
        >
            <Text style={styles.titulo}>¿Qué hice que...?</Text>

        <Image
        source={require('../assets/images/perfil.jpg')}
        style={styles.profileImage}
      />

        <Text style={styles.text}>Hola, mi nombre es Iris y soy estudiante de la cerrera de TSU en Desarrollo de Software Multiplataforma. Me apasiona la creación de aplicaciones que puedan ejecutarse en diferentes dispositivos y plataformas. Actualmente, estoy trabajando en proyectos como esta aplicacion utilizando la Api de Rick and Morty.Me interesa seguir aprendiendo sobre nuevas tecnologías, frameworks y herramientas para mejorar mis habilidades en desarrollo móvil y web.</Text>

        </ImageBackground>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "40%",
        height: "100%",
        objectFit: "cover"
    },
    profileImage: {
        width: 120, 
        height: 120,
        borderRadius: 60, 
        borderWidth: 2,
        borderColor: 'white', 
      },
      text: {
        margin: 40,
        color: "#fff",
        fontSize: 20,
        fontFamily: "Creepster", 
        textAlign: "justify",
        backgroundColor: "rgba(255, 254, 254, 0.36)", 
        padding: 5,
        borderRadius: 10,
      },

    background: {
        flex: 1, 
        alignItems: "center",
    },
    contend: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    titulo: {
        fontSize: 60,
        fontFamily: "Creepster", 
        color: "white",
        textShadowColor: "limegreen",        
        textShadowRadius: 70,
        marginTop: 50,
    },
    titulo2: {
        fontSize: 30,
        fontFamily: "Creepster",
        color: "#fff",
    },
    button: {
        backgroundColor: "rgba(255, 254, 254, 0.36)", 
        padding: 40,
        borderRadius: 10,
        marginTop: 10,
    }
});
