import { Router } from "express";
import { getTareas, getExamanes, getEventos, getReuniones, getRecursos } from "../controllers/controles.controller.js"


const router = Router()

router.get('/tareas', getTareas);
router.get('/eventos', getEventos);
router.get('/examenes', getExamanes);
router.get('/reuniones', getReuniones);
router.get('/recursos', getRecursos);


export default router