import { LocationResult } from "./locationResult";

export class DataSource {
    constructor() {}

    //metodo para leer la lista de personajess
    //debe recibir el numero de paguina que debe de cargar 
    async getLocations(page:number) : Promise <LocationResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page || 1}`);
        return response.json(); 

    }
    
}