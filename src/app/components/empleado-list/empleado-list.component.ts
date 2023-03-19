import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    {
      legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000
    },
    {
      legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'Masculino', salario: 22000
    },
    {
      legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 29000
    },
    {
      legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 24000
    },
    {
      legajo: 5, nombre: 'Maria', apellido: 'Navarro', sexo: 'Femenino', salario: 26000
    },
    {
      legajo: 6, nombre: 'Joaquin', apellido: 'Marquez', sexo: 'Masculino', salario: 22000
    },
  ];

  radioButtonSeleccionado: string = 'Todos'

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string) {
    this.radioButtonSeleccionado = radioButtonSelec;
  }

}
