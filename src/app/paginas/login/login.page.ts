import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(): void {
    if (!this.email || !this.contrasena) {
      alert('Por favor, complete ambos campos.');
      return;
    }

    this.authService.login(this.email, this.contrasena).subscribe(
      (data) => {
        if (data && data.token) {
          // Guardamos el token y usuario_id en localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('usuario_id', data.usuario_id.toString()); // Guardamos el usuario_id
          this.router.navigateByUrl('/home');
        } else {
          alert('Credenciales inválidas');
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Hubo un error al intentar iniciar sesión');
      }
    );
  }

  goToRegister(): void {
    this.router.navigateByUrl('/registro');
  }
}
