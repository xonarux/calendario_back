import { Request, Response } from "express";
import pool from "../config/db";
const DATATABLE = "eventos";

export const getEvents = async (req: Request, res: Response) => {
  const [rows] = await pool.query(`SELECT * FROM ${DATATABLE}`);
  res.json({ data: rows });
};

export const createEvent = async (req: Request, res: Response) => {
  const { name, fecha, hour, place, capacitador, link_inscription } = req.body;
  await pool.query(
    `INSERT INTO ${DATATABLE} (name, fecha, hour, place, capacitador, link_inscription) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, fecha, hour, place, capacitador, link_inscription]
  );
  res.status(201).json({ message: "Event created" });
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, fecha, hour, place, capacitador, link_inscription } = req.body;
  await pool.query(
    `UPDATE ${DATATABLE} SET name = ?, fecha = ?, hour = ?, place = ? capacitador = ?, link_inscription = ? WHERE id = ?`,
    [name, fecha, hour, place, capacitador, link_inscription, id]
  );
  res.json({ message: "Event updated" });
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query(`DELETE FROM ${DATATABLE} WHERE id = ?`, [id]);
  res.json({ message: "Event deleted" });
};
