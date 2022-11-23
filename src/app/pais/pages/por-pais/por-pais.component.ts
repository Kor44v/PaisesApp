import { Component, OnInit } from '@angular/core';
import { Countries, Languages } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino:string='';
  hayError:boolean=false;
  paises:Countries[]=[];
  idioma:Languages[]=[]

  constructor(private paisService:PaisService) { }


  buscar(termino:string){
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
    //TODO: crear sugerencias
  }


}
