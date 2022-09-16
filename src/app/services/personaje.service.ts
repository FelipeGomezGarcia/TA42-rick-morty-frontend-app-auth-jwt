import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje.model';

const apiUrl = 'https://faker-serve.herokuapp.com/characters'

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(apiUrl);
  }

  get(id:any):Observable<Personaje>{
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(datos:any): Observable<any>{
    return this.http.post(apiUrl,datos);
  }

  update(id:any,datos:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}`,datos);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(apiUrl);
  }

  findByName(name:any):Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${apiUrl}?name=${name}`)
  }
}
