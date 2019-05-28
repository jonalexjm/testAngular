import { Component, OnInit } from '@angular/core';
import { candidatos } from 'src/app/Shared/candidato';
import {ComponenteBService} from '../Shared/componente-b.service'

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.scss']
})
export class ComponenteBComponent implements OnInit {


  listCandidatos:any[] = [];

  constructor(private componenteBService :ComponenteBService ) { }

  ngOnInit() {

    this.listCandidatos = this.componenteBService.getListcandidatos();

    console.log(this.listCandidatos);
  }

  pruebaIdi(){

    console.log("Método prueba Idi exitoso");
    
  
  }
  

}
