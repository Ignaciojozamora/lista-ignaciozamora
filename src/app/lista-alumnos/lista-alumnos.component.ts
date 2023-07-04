import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { STATUS_ALUMNO } from '../models/enums';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = 
  [{ id: "21726705-927e-4dbb-9fb3-d4b4d983299e",
    name: "Pepito",
    lastName: "Clonosaurio",
    status: STATUS_ALUMNO.APROBADO,
    gradeAverage: 7.5},
    { id: "e7522186-b56f-4cda-85ea-9cea6281d87d",
    name: "Rafael",
    lastName: "Tortuga",
    status: STATUS_ALUMNO.LIBRE,
    gradeAverage: 2},
    { id: "4bc90ba5-6c4d-4f96-a75a-7895ba631524",
    name: "Ana",
    lastName: "Bela",
    status: STATUS_ALUMNO.RECUPERATORIO,
    gradeAverage: 3.5},
    { id: "c98c90c3-ba7f-48ab-b07b-2ae0ed94831f",
    name: "Ceres",
    lastName: "Nano",
    status: STATUS_ALUMNO.REPROBADO,
    gradeAverage: 3.5},
    { id: "45425cf4-df41-4e5d-8475-b7738c5e36f9",
    name: "Cali",
    lastName: "Fragilistico",
    status: STATUS_ALUMNO.APROBADO,
    gradeAverage: 8},
    { id: "9042c1be-e9b1-42a5-907c-50422ad8b6f5",
    name: "Pepe",
    lastName: "Cortisona",
    status: STATUS_ALUMNO.REPROBADO,
    gradeAverage: 3},
    { id: "aadb0005-cb69-486e-8cf0-28ef69bc30bb",
    name: "Dibu",
    lastName: "Jito",
    status: STATUS_ALUMNO.PROMOCION,
    gradeAverage: 10}
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
