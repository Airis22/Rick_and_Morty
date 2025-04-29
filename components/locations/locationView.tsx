import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { DataSource } from "./dataSource";
import { LocationResult } from "./locationResult";
import { LocationCard } from "./locationCard";


export function LocationView() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<LocationResult>({
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
        dataSource.getLocations(page)
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
                <TouchableOpacity 
                    style={[styles.buttons, data.info.prev === null ? styles.disable : null]}
                    onPress={() => setPage(page - 1)}
                    disabled={data.info.prev === null}>
                    <Text style={styles.textWhite}>Anterior</Text>
                </TouchableOpacity>

                <View style={styles.rowtext}>
                    <Text style={styles.textWhite}>Página</Text>
                    <Text style={styles.textWhite}>{page}</Text>
                    <Text style={styles.textWhite}>de</Text>
                    <Text style={styles.textWhite}>{data.info.pages}</Text>
                </View>

                <TouchableOpacity 
                    style={[styles.buttons, data.info.next === null ? styles.disable : null]}
                    onPress={() => setPage(page + 1)}
                    disabled={data.info.next === null}>
                    <Text style={styles.textWhite}>Siguiente</Text>
                </TouchableOpacity>
            </View>

            {loading ? <ActivityIndicator size="large" /> : null}

            <FlatList
                style={styles.flatlist}
                data={data.results}
                renderItem={({ item }) => (
                    <LocationCard location={item} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 8,
        width: "100%",
        height: "100%"
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#195B37",
        height: 50,
    },
    rowtext: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    buttons: {
        borderRadius: 8,
        borderWidth: 4,
        padding: 4,
        borderColor: "white",
        backgroundColor: "#094161",
    },
    disable: {
        opacity: 0.5,
    },
    textWhite: {
        color: "white",
        fontWeight: "bold", 
    },
    flatlist: {},
});
