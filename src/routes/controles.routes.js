import { Router } from "express";
import { getTareas, getExamanes, getEventos, getReuniones, getRecursos } from "../controllers/controles.controller.js"


const router = Router()

router.post('/tareas', getTareas);
router.post('/eventos', getEventos);
router.post('/examenes', getExamanes);
router.post('/reuniones', getReuniones);
router.post('/recursos', getRecursos);


export default router