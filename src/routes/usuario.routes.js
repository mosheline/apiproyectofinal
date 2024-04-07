import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  createUsuario,
} from "../controllers/usuario.controller.js";

const router = Router();

router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", createUsuario);

export default router;
