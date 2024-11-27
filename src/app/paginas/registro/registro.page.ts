// registro.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  email: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Función que se ejecuta al hacer click en el botón de registro
  registro(): void {
    if (!this.nombre || !this.email || !this.contrasena) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.authService.registro(this.nombre, this.email, this.contrasena).subscribe(
      (data) => {
        if (data && data.usuario_id) {
          alert('Registro exitoso');
          this.router.navigateByUrl('/login');
        } else {
          alert('Error al registrar usuario');
        }
      },
      (error) => {
        console.error('Error al registrar:', error);
        alert('Hubo un error al registrar el usuario');
      }
    );
  }
}
