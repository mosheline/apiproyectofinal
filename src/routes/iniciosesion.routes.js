import { Router } from "express";
import { postIniciarSesion } from "../controllers/iniciosesion.controller.js";

const router = Router();

router.post("/login", postIniciarSesion);


//router.post("/employees", (req, res) => res.send("Creando empleados"));
//router.put("/employees", (req, res) => res.send("Actualizando empleados"));
//router.delete("/employees", (req, res) => res.send("Eliminando empleados"));

export default router;
