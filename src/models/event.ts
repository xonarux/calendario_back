import { Capacitador } from "./capacitador";
import { Municipio } from "./municipio";

export interface Event {
  id: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string | null;
  hora_inicio: string;
  hora_fin: string | null;
  municipio: Municipio;
  lugar: string | null;
  capacitador: Capacitador;
  link_inscripcion: string | null;
}
