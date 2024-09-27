import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";
import {
  getCapacitadores,
  createCapacitador,
  updateCapacitador,
  deleteCapacitador,
} from "../controllers/capacitadorController";

const router = express.Router();
//Rutas de capacitadores
router.get("/capacitadores", getCapacitadores);
router.post("/capacitadores", createCapacitador);
router.put("/capacitadores/:id", updateCapacitador);
router.delete("/capacitadores/:id", deleteCapacitador);
//Rutas de eventos
router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
