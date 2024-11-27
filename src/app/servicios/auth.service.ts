import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://proyecto-9xtr.onrender.com/api';  // Asegúrate de que la URL de la API sea correcta

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // Función para registrar un nuevo usuario
  registro(nombre: string, email: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro`, { nombre_U: nombre, email, contrasena });
  }

  // Función de login
  login(email: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, contrasena });
  }
}
