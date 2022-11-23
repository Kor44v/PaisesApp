import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private _apiUrl:string='https://restcountries.com/v3.1';


  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,cca2,flags,population');
  }

  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<Countries[]>{
    const url=`${this._apiUrl}/name/${termino}`

    return this.http.get<Countries[]>(url,{params:this.httpParams});
  }
  buscarCapital(termino:string):Observable<Countries[]>{
    const url=`${this._apiUrl}/capital/${termino}`

    return this.http.get<Countries[]>(url,{params: this.httpParams});
  }

  getPaisPorAlpha(id:string):Observable<Countries>{
    const url=`${this._apiUrl}/alpha/${id}`

    return this.http.get<Countries>(url);
  }
  buscarRegion(region:string):Observable<Countries[]>{
    
  
    const url=`${this._apiUrl}/region/${region}`

    return this.http.get<Countries[]>(url,{params:this.httpParams})//se puede poner solo params cuiando a la const se le coloca el mismo nombre
    .pipe(
      tap(console.log)
    )
  }
}
