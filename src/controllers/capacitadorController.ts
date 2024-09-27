import { Request, Response } from "express";
import pool from "../config/db";
const DATATABLE = "capacitadores";

export const getCapacitadores = async (req: Request, res: Response) => {
  const [rows] = await pool.query(`SELECT * FROM ${DATATABLE}`);
  res.json({ data: rows });
};

export const createCapacitador = async (req: Request, res: Response) => {
  const { nombre, area, cargo, url_imagen } = req.body;
  await pool.query(
    `INSERT INTO ${DATATABLE} (nombre, area, cargo, url_imagen) VALUES ('${nombre}','${area}' ,'${cargo}', '${url_imagen}')`
  );
  res.status(201).json({ message: "Capacitador creado" });
};

export const updateCapacitador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, area, cargo, url_imagen } = req.body;
  await pool.query(
    `UPDATE ${DATATABLE} SET nombre = '${nombre}', area = '${area}', cargo = '${cargo}', url_imagen = '${url_imagen}' WHERE id = ${id}`
  );
  res.json({ message: "Capacitador actualizado" });
};

export const deleteCapacitador = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query(`DELETE FROM ${DATATABLE} WHERE id = ${id}`);
  res.json({ message: "Capacitador borrado" });
};
