import { EpisodesResult } from "./episodesResult";

export class DataSource {
    constructor() {}

    //metodo para leer la lista de episodios
    //debe recibir el numero de paguina que debe de cargar 
    async getEpisodes(page:number) : Promise <EpisodesResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page || 1}`);
        return response.json(); 
    }
}