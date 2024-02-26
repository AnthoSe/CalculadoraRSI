import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GastoService } from '../../services/gasto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  gastoForm: FormGroup;

  constructor(private fb: FormBuilder, private gastoService: GastoService) {
    this.gastoForm = this.fb.group({
      tipo: ['', [Validators.required]],
      ruc: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const gastoData = this.gastoForm.value;
    this.gastoService.addGasto(gastoData).subscribe(
      response => {
        console.log('Gasto registrado con éxito', response);
        alert('Gasto Ingresado');
        //this.resetForm(); // Agrega esta línea para resetear el formulario después de enviarlo con éxito
      },
      error => {
        console.error('Error al registrar gasto', error);
      }
    );
  }

  //resetForm() {
   // this.gastoForm.reset();
  //}
}
