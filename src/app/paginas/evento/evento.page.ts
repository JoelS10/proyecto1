import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../servicios/general.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  evento: any = {
    titulo: '',
    descripcion: '',
    fecha_evento: '',
    tipo: 'estudio',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id && id !== '0') {
      this.obtenerEvento(id);
    }
  }

  obtenerEvento(id: string): void {
    this.generalService.get<any>(`eventos/${id}`).subscribe(
      (data) => (this.evento = data),
      (error) => console.error('Error al obtener evento:', error)
    );
  }

  guardarEvento(): void {
    const usuario_id = localStorage.getItem('usuario_id'); // Obtener usuario_id desde localStorage
  
    if (!usuario_id) {
      alert('No estás autenticado');
      return;
    }
  
    this.evento.usuario_id = parseInt(usuario_id); // Agregar usuario_id al objeto del evento
  
    // Verificar si ya tiene un evento_id para actualizar o crear
    if (this.evento.evento_id) {
      this.generalService.put('eventos', this.evento.evento_id, this.evento).subscribe(
        () => this.router.navigateByUrl('/home'),
        (error) => console.error('Error al actualizar evento:', error)
      );
    } else {
      // Si no tiene evento_id, es un nuevo evento, lo creamos
      this.generalService.post('eventos', this.evento).subscribe(
        () => this.router.navigateByUrl('/home'),
        (error) => console.error('Error al crear evento:', error)
      );
    }
  }
}
