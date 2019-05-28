import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponenteBService {

  private listCandidatos:any[] = [
    {
      nombreCandidato: "juan carlos lopez",
      telefono: "897876878",
      direccion: "calle de la alegria",
      email: "jonalexjm@gmail.com",
      aspiracionSalarial: "1200000",
      nivelIngles: "medio alto"  

    },
    {
      nombreCandidato: "silvio camilo",
      telefono: "83674647464",
      direccion: "calle de la alegria",
      email: "ximena@gmail.com",
      aspiracionSalarial: "12038384",
      nivelIngles: "medio"  

    },
    {
      nombreCandidato: "castro camila ",
      telefono: "567895678",
      direccion: "cali valle",
      email: "castro@gmail.com",
      aspiracionSalarial: "1230987",
      nivelIngles: "bajo"  

    },
    {
      nombreCandidato: "juliana gonzales ",
      telefono: "9876447",
      direccion: "popayan valle",
      email: "juliana@gmail.com",
      aspiracionSalarial: "34567533",
      nivelIngles: "alto" 

    }
  ]

    constructor() { 

      console.log("servicio listo para usar");
    }

    getListcandidatos(){

      return this.listCandidatos;
    }



}
