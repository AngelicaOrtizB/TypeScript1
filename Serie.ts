export class Piloto {
    id: number;
    name: string;
    nacionalidad: string;
    equipoActual: string;
    description: string;
    link: string;
    image: string;
  
    constructor(id: number, name: string,nacionalidad: string, equipoActual: string, description: string, link: string, image: string) {
      this.id = id;
      this.name = name;
      this.nacionalidad = nacionalidad;
      this.equipoActual=equipoActual;
      this.description = description;
      this.link = link;
      this.image = image;
    }
  }
  