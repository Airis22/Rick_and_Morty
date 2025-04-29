import { ActivityIndicator, Alert, FlatList, FlatListComponent, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Character } from "./characterType";
import { CharacterCard } from "./characterCard";
import { useEffect, useState } from "react";
import { DataSource } from "./dataSource";
import { CharacterResult } from "./characterResult";


export function CharacterView() {
    const [loading, setLoading] = useState(false);

    /* const characters : Character[] = [
        //objetos
        {
            id: 1,
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            location: {
                name: "Citadel of Ricks",
            },
            status: "Alive",
            species: "Human"
        } 
        
    ];*/

    const [page, setPage] = useState(1);
    const [data, setData] = useState<CharacterResult>({
        info: {
            pages: 0,
            count: 0,
            next: null,
            prev: null

        },
        results: []
    });

    const dataSource = new DataSource();

    useEffect(() => {
        setLoading(true); //esta crgando 
        dataSource.getCharacters(page)
            .then((reponse) => {
                setData(reponse)
            })
            .catch((error) => {
                Alert.alert(`Error: ${error.menssage}`);
            })
            .finally(() => {
                setLoading(false);//ya no testa cragando 
            })

    }, [page]);

    return (

        <SafeAreaView style={styles.content}>
            <View style={styles.nav}>
                <TouchableOpacity style={[styles.buttonNext, data.info.prev === null ? styles.disable : undefined]}
                    onPress={() => setPage(page - 1)}
                    disabled={data.info.prev === null}><Text style={styles.textWhite}>Anterior</Text></TouchableOpacity>

                <View style={styles.rowtext}>
                    <Text style={styles.textWhite}>Página</Text>
                    <Text style={styles.textWhite}>{page}</Text>
                    {/* numero de pagina que manda la Api */}
                    <Text style={styles.textWhite}>de</Text>
                    <Text style={styles.textWhite}>{data.info.pages}</Text>
                </View>

                <TouchableOpacity style={[styles.buttonSig, data.info.prev === null ? styles.disable : undefined]}
                    onPress={() => setPage(page + 1)}
                    disabled={data.info.next === null}
                ><Text style={styles.textWhite}>Siguiente</Text></TouchableOpacity>

            </View>
            {/* si esta ceagando muestra el indicador sino no muestres nada  */}

            {loading ? (
                <ActivityIndicator size="large" />
            ) : null}

            {/*      {data.results.map((item) => (
                <CharacterCard 
                key= {item.id}
                //identifica el componente una vez pintado en la pantalla 
                character={item}
                />
            ))} */}

            <FlatList
            style={styles.flatlist}
                data={data.results}
                renderItem={({ item }) => (
                    <CharacterCard
                        character={item}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        padding: 8,
        width: "100%",
        height: "100%",
       
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#195B37",
        height: 50,
    },
    rowtext: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    buttonNext: {
        borderRadius: 8,
        borderWidth: 4,
        borderColor: "black",
        backgroundColor: "#20bb96",
    },
    buttonSig: {
        borderRadius: 8,
        borderWidth: 4,
        borderColor: "black",
        backgroundColor: "#20bb96", 
    },
    disable: {
        opacity: 5,
    },
    flatlist: {

    },
    textWhite: {
        color: "white",
        fontWeight: "bold", 
    },

});