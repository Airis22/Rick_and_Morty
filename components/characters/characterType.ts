//Tipo que define un personaje 
export type Character = {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "Unknow";
    location:{
        name: string;
    };
    species: string;
    image: string;
    origin:{
        name:string
    };
}