import { ActivityIndicator, Alert, FlatList, FlatListComponent, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Character } from "./characterType";
import { CharacterCard } from "./characterCard";
import { useEffect, useRef, useState } from "react";
import { DataSource } from "./dataSource";
import { CharacterResult } from "./characterResult";


export default function CharacterScrollView(){
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
    const flatListRef = useRef(null);

    //funcion para disparar la carga
    const handelEndRached = () => {
        //si hay una paguina siguinete y no etsa carganado la paguina entonces incrementar la paguina 
        if (data.info.next && !loading){
            setPage(prevPage => prevPage +1);
        }
    }

    useEffect(() => {
        setLoading(true); //esta crgando 
        dataSource.getCharacters(page)
        .then((reponse) => {

            //conservar los personajes ya cargados accediendo al estado acyual sacando una copia al estado de data y unirno con el servidor 
           /*  setData(reponse) */
           setData((prevData) => ({
                results: [...prevData.results, ...reponse.results],
                info:reponse.info,
                //en un objeto son comas al final 
                //en una istruccion es punto y coma al final
                //propiedad donde lamacenamos la lista de personajes en un arreglo
           }))
           //asignar como valor el objeto que retorna la funcion de callback que debe unir todos los personajes
        })
        .catch((error) =>{
            Alert.alert(`Error: ${error.menssage}`);
        }) 
        .finally(() =>{
            setLoading(false);//ya no testa cragando 
        })

    }, [page]);
    
    return (
        
        <SafeAreaView style={styles.content}>
            <View style={styles.nav}>

                {/* <TouchableOpacity style={[styles.buttonNext, data.info.prev === null ? styles.disable : undefined]}
                onPress={()=>setPage(page -1)}
                disabled={data.info.prev === null}><Text>Anterior</Text></TouchableOpacity>
 */}
                <View style={styles.rowtext}>
                    <Text style={styles.textWhite}>Página</Text> 
                    <Text style={styles.textWhite}>{page}</Text> 
                    {/* numero de pagina que manda la Api */}
                    <View>
                        <Text style={styles.textWhite}>Personajes {data.results.length}</Text>
                    </View>

                    <Text style={styles.textWhite}>de</Text> 
                    <Text style={styles.textWhite}>{data.info.count}</Text> 
                </View>

                {/* <TouchableOpacity style={[styles.buttonSig, data.info.prev === null ? styles.disable : undefined]}
                onPress={()=>setPage(page +1)}
                disabled={data.info.next === null}
                ><Text>Siguiente</Text></TouchableOpacity>
 */}
            </View>
            {/* si esta ceagando muestra el indicador sino no muestres nada  */}

            {loading ? (
                <ActivityIndicator size="large"/>
            ): null}

       {/*      {data.results.map((item) => (
                <CharacterCard 
                key= {item.id}
                //identifica el componente una vez pintado en la pantalla 
                character={item}
                />
            ))} */}

            <FlatList
            data={data.results}
            renderItem= {({item}) => (
                <CharacterCard
                character={item} 
                />
            )}
            keyExtractor={item => item.id.toString()}
            ref={flatListRef}
            onEndReached={handelEndRached}
            onEndReachedThreshold={0.5}
            //dterminar que tanto queremos que se ejecute el recorrido para cragar mas contenido
            refreshing = {loading}
            //recragar 
            ListFooterComponent={ loading? <ActivityIndicator size="large"/> : undefined }
            //que componente quieres que pinte hasta abajo
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        padding: 8,
        width: "100%",
        height: "100%"
    },
    nav: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#195B37",   
        height: 50,   
    },
    rowtext:{
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        gap: 5, 
    },
    disable:{
        opacity: 5,
    },
    textWhite: {
        color: "white",
        fontWeight: "bold", 
    },

});