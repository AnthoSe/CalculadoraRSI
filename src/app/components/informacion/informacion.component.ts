// informacion.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  gastos = [
    {
      "id": 1,
      "tipo": "Vivienda",
      "ruc": "123456789",
      "valor": 1000,
      "descripcion": "Gasto relacionado con vivienda",
      "informacion_adicional": "Esta es información adicional sobre el gasto de vivienda",
      "imagen_url": "assets/imagen1.jpg"
    },
    {
      "id": 2,
      "tipo": "Salud",
      "ruc": "987654321",
      "valor": 800,
      "descripcion": "Gasto relacionado con salud",
      "informacion_adicional": "Esta es información adicional sobre el gasto de salud",
      "imagen_url": "assets/imagen2.jpg"
    },
    {
      "id": 3,
      "tipo": "Educacion",
      "ruc": "567890123",
      "valor": 1200,
      "descripcion": "Gasto relacionado con educación",
      "informacion_adicional": "Esta es información adicional sobre el gasto de educación",
      "imagen_url": "assets/imagen3.jpg"
    }    
  ];

  deducibles = ['Vivienda', 'Salud', 'Educacion'];

  constructor() {}

  ngOnInit(): void {}

  informacion(deducible: string) {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    if (gasto) {
      alert('Esta es información adicional sobre ' + deducible + ': ' + gasto.informacion_adicional);
    }
  }

  borrarDeducible(deducible: string) {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
  getDescripcion(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.descripcion : '';
  }
  
  getInformacionAdicional(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.informacion_adicional : '';
  }
  
  getImagenUrl(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.imagen_url : 'hola';
  }
}
