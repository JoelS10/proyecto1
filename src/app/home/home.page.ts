import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../servicios/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit() {}

  irACrearEvento(): void {
    this.router.navigateByUrl('/evento/0'); // Redirige a la página para crear un evento
  }

  irACrearTarea(): void {
    this.router.navigateByUrl('/tarea/0'); // Redirige a la página para crear una tarea
  }

  irABuscarEventos(): void {
    this.router.navigateByUrl('/buscar-eventos'); // Redirige a la página para buscar eventos
  }

  irABuscarTareas(): void {
    this.router.navigateByUrl('/buscar-tareas'); // Redirige a la página para buscar tareas
  }
}
