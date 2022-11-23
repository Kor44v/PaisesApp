import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

@Input() paises:Countries[]=[];

  constructor() { }



}
