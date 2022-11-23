import { Component, OnInit } from '@angular/core';
import { Countries, Languages } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  termino:string='';
  hayError:boolean=false;
  paises:Countries[]=[];
  
  paisesSugeridos:Countries[]=[];
  mostrarSugerencias:boolean=false;


  constructor(private paisService:PaisService) { }


  buscar(termino:string){
    this.mostrarSugerencias=false;
    this.hayError=false;
    this.termino=termino


    this.paisService.buscarPais(termino).subscribe((paises)=>{
      console.log(paises);
      this.paises=paises
      // this.idioma=this.idioma;
      // console.log(this.idioma)

    },(err)=>{
      this.hayError=true;
      this.paises=[];
  
    })
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino = termino
    this.mostrarSugerencias=true;

    
    this.paisService.buscarPais(termino).subscribe(paises=> {
      this.paisesSugeridos=paises.splice(0,6)},
      (err)=> this.paisesSugeridos=[])
 
  };

  buscarSugerido(termino:string){
    this.buscar(termino);
  };
}