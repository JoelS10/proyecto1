import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../servicios/general.service';

@Component({
  selector: 'app-buscar-eventos',
  templateUrl: './buscar-eventos.page.html',
  styleUrls: ['./buscar-eventos.page.scss'],
})
export class BuscarEventosPage implements OnInit {
  listaEventos: any[] = [];
  selectedDate: string = '';

  constructor(private generalService: GeneralService) {}

  ngOnInit() {}

  buscarEventos(): void {
    if (this.selectedDate) {
      // Llamada a la API para filtrar eventos por fecha
      this.generalService.get<any[]>(`eventos?fecha=${this.selectedDate}`).subscribe(
        (data) => {
          this.listaEventos = data;
        },
        (error) => {
          console.error('Error al buscar eventos:', error);
        }
      );
    } else {
      alert('Por favor, seleccione una fecha');
    }
  }
}
