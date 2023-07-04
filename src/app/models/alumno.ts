import { STATUS_ALUMNO } from "./enums";

export interface Alumno {
    id: string,
    name: string,
    lastName: string,
    status: STATUS_ALUMNO,
    gradeAverage: number
}