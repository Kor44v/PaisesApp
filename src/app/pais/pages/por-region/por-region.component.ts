import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string='';
  paises:Countries[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }

  activarRegion(region:string){
    this.regionActiva=region;
    this.paisService.buscarRegion(region).subscribe(paises=>{
  
      this.paises=paises;
    })
  }

}
