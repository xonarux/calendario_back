import { Capacitador } from "./capacitador";
import { Municipio } from "./municipio";

export interface Event {
  id: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  hora_inicio: string;
  hora_fin: string;
  municipio: Municipio;
  lugar: string;
  capacitador: Capacitador;
  link_inscripcion: string;
}
