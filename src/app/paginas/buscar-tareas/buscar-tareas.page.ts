import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../servicios/general.service';

@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
})
export class BuscarTareasPage implements OnInit {
  listaTareas: any[] = [];
  selectedPriority: number | null = null;

  prioridades: any[] = [
    { id: 1, name: 'Baja' },
    { id: 2, name: 'Media' },
    { id: 3, name: 'Alta' }
  ];

  constructor(private generalService: GeneralService) {}

  ngOnInit() {}

  buscarTareas(): void {
    if (this.selectedPriority !== null) {
      this.generalService.get<any[]>(`tareas?prioridad=${this.selectedPriority}`).subscribe(
        (data) => {
          this.listaTareas = data;
        },
        (error) => {
          console.error('Error al buscar tareas:', error);
        }
      );
    } else {
      alert('Por favor, seleccione una prioridad');
    }
  }
}
