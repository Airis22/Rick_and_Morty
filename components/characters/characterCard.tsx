//Tarjeta de personaje

import { Image, StyleSheet, Text, View } from "react-native";
import { Character } from "./characterType"

//tipo para especificar las funciones de characterCard
//propiedades de Character card 
//primer paso definir props 
type Props={
    character: Character
}
export function CharacterCard({character}: Props){

    const getColorStatus = () => {
    switch (character.status){
        case "Alive":
            return styles.alive;
        case "Dead":
            return styles.dead;
        case "Unknow":
            return styles.unknown;
        default:
            return styles.unknown;
    }
}
//estructura de la tarjeta 
return(
    <View style={styles.card}>

        <Image
        style={styles.image}
        source= {{
            uri: character.image
            }}/>

        <View style={styles.content}>

            <View>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={[styles.textValue, character.name.length > 20 ? styles.smallText :undefined]}>{character.name}</Text>
            </View>

            <View>
                <Text style={styles.label}>Especie y Estatus </Text>

                <View style={styles.row}>
                    <View style={[styles.status, getColorStatus()]}></View>
                    <Text style={styles.textValue}>{character.species} - {character.status}</Text>
                </View>

            </View>

            <View>
                <Text style={styles.label}>Location:</Text>
                <Text style={[styles.textValue,
                    character.location.name.length > 20 ? styles.smallText :undefined
                ]}>{character.location.name}</Text>
            </View>

            <View>
                <Text style={styles.label}>Origin:</Text>
                <Text style={[styles.textValue,
                    character.origin.name.length > 20 ? styles.smallText :undefined
                ]}>{character.origin.name}</Text>
            </View>
        </View> 
    </View>

    );
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 200,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: "#aa853c",
        marginVertical: 5,
        backgroundColor: "#c1c19f",
       
    },
    image: {
        //bordes izquierdos redondeados
        width: "40%",
        height: "100%",
        objectFit: "cover"

    },
    content: {
        display: "flex", 
        flexDirection: "column",
        marginLeft: 10,
        
        /* justifyContent: "space-around", */ 
    },
    label:{
        color: "#2d7096",
        fontSize: 16,
    },
    textValue: {
        color: "#094161",
        fontSize: 20,
        fontWeight: 700,
    },
    status: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "grey",
    },
    alive: {
        backgroundColor: "green",
    },
    dead: {
        backgroundColor: "red",
    },
    unknown:{
        backgroundColor: "orange",
    },
    row: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        gap: 5, 
    },
    smallText: {
        fontSize:13,
    }
});