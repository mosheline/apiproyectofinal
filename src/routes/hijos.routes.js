import { Router } from "express";
import { getHijos, getHijosporPadre } from "../controllers/hijos.controller.js"


const router = Router()

router.get('/hijos', getHijos);
router.get('/hijos/:id', getHijosporPadre);

export default router