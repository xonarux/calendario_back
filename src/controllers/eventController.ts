import { Request, Response } from "express";
import pool from "../config/db";
const DATATABLE = "eventos";

export const getEvents = async (req: Request, res: Response) => {
  const [rows] = await pool.query(`SELECT * FROM ${DATATABLE}`);
  res.json({ data: rows });
};

export const createEvent = async (req: Request, res: Response) => {
  const {
    nombre,
    fecha_inicio,
    fecha_fin,
    hora_inicio,
    hora_fin,
    municipio,
    lugar,
    capacitador,
    link_inscripcion,
  } = req.body;
  await pool.query(
    `INSERT INTO ${DATATABLE} (nombre, fecha_inicio, fecha_fin, hora_inicio, hora_fin, municipio, capacitador, link_inscripcion) VALUES ('${nombre}', '${fecha_inicio}', '${fecha_fin}', '${hora_inicio}', '${hora_fin}', ${municipio}, '${lugar}', ${capacitador}, '${link_inscripcion}')`
  );
  res.status(201).json({ message: "Evento creado" });
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    nombre,
    fecha_inicio,
    fecha_fin,
    hora_inicio,
    hora_fin,
    municipio,
    lugar,
    capacitador,
    link_inscripcion,
  } = req.body;
  await pool.query(
    `UPDATE ${DATATABLE} SET nombre = '${nombre}', fecha_inicio = '${fecha_inicio}', fecha_fin = '${fecha_fin}', hora_inicio = '${hora_inicio}', hora_fin = '${hora_fin}' municipio = ${municipio} lugar = '${lugar}' capacitador = ${capacitador}, link_inscripcion = '${link_inscripcion}' WHERE id = ${id}`
  );
  res.json({ message: "Evento actualizado" });
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query(`DELETE FROM ${DATATABLE} WHERE id = ${id}`);
  res.json({ message: "Evento eliminado" });
};
