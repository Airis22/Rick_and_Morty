import { CharacterResult } from "./characterResult";

export class DataSource {
    constructor() {}

    //metodo para leer la lista de personajess
    //debe recibir el numero de paguina que debe de cargar 
    async getCharacters(page:number) : Promise <CharacterResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page || 1}`);
        return response.json(); 

    }
    
}