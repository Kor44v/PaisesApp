import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string='';
  hayError:boolean=false;
  paises:Countries[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError=false
    this.termino=termino


    this.paisService.buscarCapital(termino).subscribe(paises=>{
      console.log(paises)
      this.paises=paises
    },(err=>{
      this.hayError=true;
      console.log(err);
      this.paises=[];
    }))
  }

  sugerencias(temrino:string){
    
  }

}
