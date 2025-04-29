import { ActivityIndicator, Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { DataSource } from "./dataSource";
import { EpisodesResult } from "./episodesResult";
import { EspisodesCard } from "./episodesCard";


export function EpisodesView() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState<EpisodesResult>({
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
        setLoading(true);
        dataSource.getEpisodes(page)
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                Alert.alert(`Error: ${error.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.nav}>
                <TouchableOpacity 
                    style={[styles.buttons, data.info.prev === null ? styles.disable : undefined]}
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
                    style={[styles.buttons, data.info.next === null ? styles.disable : undefined]}
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
                    <EspisodesCard episode={item} />
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
