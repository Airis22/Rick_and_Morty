import React, { useState } from "react";
import { 
    Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View 
} from "react-native";
import { Character } from "./characterType";

// Definir las props
type Props = {
    character: Character;
};

export function CharacterCard({ character }: Props) {
    // Estado para controlar el modal
    const [modalVisible, setModalVisible] = useState(false);

    const getColorStatus = () => {
        switch (character.status) {
            case "Alive":
                return styles.alive;
            case "Dead":
                return styles.dead;
            default:
                return styles.unknown;
        }
    };

    return (
        <>
            {/* Tarjeta del personaje */}
            <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
                <Image style={styles.image} source={{ uri: character.image }} />
                <View style={styles.content}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={[styles.textValue, character.name.length > 20 ? styles.smallText : undefined]}>
                        {character.name}
                    </Text>

                    <Text style={styles.label}>Especie y Estatus:</Text>
                    <View style={styles.row}>
                        <View style={[styles.status, getColorStatus()]}></View>
                        <Text style={styles.textValue}>{character.species} - {character.status}</Text>
                    </View>

                    <Text style={styles.label}>Ubicación:</Text>
                    <Text style={[styles.textValue, character.location.name.length > 20 ? styles.smallText : undefined]}>
                        {character.location.name}
                    </Text>

                    <Text style={styles.label}>Origen:</Text>
                    <Text style={[styles.textValue, character.origin.name.length > 20 ? styles.smallText : undefined]}>
                        {character.origin.name}
                    </Text>
                </View>
            </TouchableOpacity>

            {/* Modal de detalles */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={{ uri: character.image }} style={styles.modalImage} />
                        <Text style={styles.modalTitle}>{character.name}</Text>
                        <Text style={styles.modalText}> Especie: {character.species}</Text>
                        <Text style={styles.modalText}>Ubicación: {character.location.name}</Text>
                        <Text style={styles.modalText}> Estado: {character.status}</Text>
                        
                        <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.textWhite}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
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
        width: "40%",
        height: "100%",
        objectFit: "cover",
    },
    content: {
        marginLeft: 10,
    },
    label: {
        color: "#2d7096",
        fontSize: 16,
    },
    textValue: {
        color: "#094161",
        fontSize: 20,
        fontWeight: "700",
    },
    status: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "grey",
    },
    alive: { backgroundColor: "green" },
    dead: { backgroundColor: "red" },
    unknown: { backgroundColor: "orange" },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    smallText: { fontSize: 13 },

    // Estilos del Modal
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 5,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: "#094161",
        padding: 10,
        borderRadius: 8,
    },
    textWhite: {
        color: "white",
        fontWeight: "bold",
    },
});
