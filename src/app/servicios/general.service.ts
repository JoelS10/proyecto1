import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  // public readonly URLAPI: string = 'https://proyecto-9xtr.onrender.com/api/';
  public URLAPI: string = "http://localhost/apiProyecto/";

  constructor(private http: HttpClient, private router: Router) {}

  // Método genérico GET
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.URLAPI}${endpoint}`);
  }

  // Método genérico POST
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.URLAPI}${endpoint}`, data);
  }

  // Método genérico PUT
  put<T>(endpoint: string, id: number | string, data: any): Observable<T> {
    return this.http.put<T>(`${this.URLAPI}${endpoint}/${id}`, data);
  }

  // Método genérico DELETE
  delete<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.URLAPI}${endpoint}/${id}`);
  }

  // Método para redirigir a una ruta específica
  irA(url: string): void {
    this.router.navigateByUrl(url);
  }
}
