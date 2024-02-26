// reporte.component.ts
import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { Reporte } from '../../models/reporte';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  reportes: Reporte[] = [];
  reporteEditando: Reporte | null;
  nuevoTipoGasto: string = '';
  nuevoRUC: string = '';
  nuevoValor: string = '';

  constructor(private reporteService: ReporteService) {
    this.reportes = [];
    this.reporteEditando = null;
  }

  ngOnInit() {
    this.getAllReporte(); // Corregido aquí
  }

  getReporte() {
    this.reporteService.getReporte().subscribe(
      (res) => {
        this.reportes = res;
      },
      (err) => console.error(err)
    );
  }

  getAllReporte(): void {
    this.reporteService.getAllReporte().subscribe(
      (reportes: Reporte[]) => {
        this.reportes = reportes;
      },
      error => {
        console.error('Error al obtener el reporte:', error);
      }
    );
  }

  eliminarReporte(reporte: Reporte): void {
    if (confirm('¿Estás seguro de eliminar este reporte?')) {
      const reporteId = reporte._id;

      this.reporteService.deleteReporte(reporteId).subscribe(
        response => {
          console.log('Reporte eliminado exitosamente:', response);
          this.getAllReporte();
        },
        error => {
          console.error('Error al eliminar reporte:', error);
        }
      );
    }
  }

  editarReporte(reporte: Reporte): void {
    this.reporteEditando = reporte;
    this.nuevoTipoGasto = reporte.tipo || '';
    this.nuevoRUC = reporte.ruc || '';
    this.nuevoValor = reporte.valor || '';
  }

  guardarEdicion(): void {
    if (this.reporteEditando) {
      const newData = {
        tipo: this.reporteEditando.tipo,
        ruc: this.reporteEditando.ruc,
        valor: this.reporteEditando.valor
      };

      const reporteId = this.reporteEditando._id;

      this.reporteService.updateReporte(reporteId, newData).subscribe(
        response => {
          console.log('Reporte actualizado exitosamente:', response);
          this.getAllReporte();
          this.reporteEditando = null;
        },
        error => {
          console.error('Error al actualizar Reporte:', error);
        }
      );
    }
  }
}
