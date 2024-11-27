import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../servicios/general.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  tarea: any = {
    titulo: '',
    descripcion: '',
    fecha_vencimiento: '',
    prioridad_id: null,
    evento_id: null, // Aseguramos que el evento_id se pase correctamente
  };

  prioridades: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cargarPrioridades();

    // Si es un id de tarea, obtenemos los datos
    if (id && id !== '0') {
      this.obtenerTarea(id);
    }

    // Aquí asignamos el usuario_id desde el localStorage
    const usuario_id = localStorage.getItem('usuario_id');
    if (usuario_id) {
      this.tarea.usuario_id = parseInt(usuario_id, 10);
    }
  }

  cargarPrioridades(): void {
    this.generalService.get<any[]>('prioridades').subscribe(
      (data) => (this.prioridades = data),
      (error) => console.error('Error al cargar prioridades:', error)
    );
  }

  obtenerTarea(id: string): void {
    this.generalService.get<any>(`tareas/${id}`).subscribe(
      (data) => (this.tarea = data),
      (error) => console.error('Error al obtener tarea:', error)
    );
  }

  guardarTarea(): void {
    // Aquí asignamos el evento_id, si se tiene algún valor previamente
    const evento_id = this.activatedRoute.snapshot.paramMap.get('evento_id');
    if (evento_id) {
      this.tarea.evento_id = parseInt(evento_id, 10);
    }

    // Verificamos si la tarea tiene un tarea_id para determinar si es crear o actualizar
    if (this.tarea.tarea_id) {
      this.generalService.put('tareas', this.tarea.tarea_id, this.tarea).subscribe(
        () => this.router.navigateByUrl('/home'),
        (error) => console.error('Error al actualizar tarea:', error)
      );
    } else {
      this.generalService.post('tareas', this.tarea).subscribe(
        () => this.router.navigateByUrl('/home'),
        (error) => console.error('Error al crear tarea:', error)
      );
    }
  }
}
