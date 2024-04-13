import { pool } from "../db.js"

export const getTareas = async (req, res) => {
    const {idusuario} = req.body
    const [rows] = await pool.query("CALL ObtenerInformacionControlesPorCategoria(?, 1);",[idusuario]) 

    if (rows.length <= 0) return res.status(404).json({ mes: "No hay próximas tareas"})

    res.json(rows[0]);
}

export const getExamanes = async (req, res) => {
    const {idusuario} = req.body
    const [rows] = await pool.query("CALL ObtenerInformacionControlesPorCategoria(?, 2);",[idusuario]) 
    res.json(rows[0]);
}

export const getEventos = async (req, res) => {
    const {idusuario} = req.body
    const [rows] = await pool.query("CALL ObtenerInformacionControlesPorCategoria(?, 3);",[idusuario]) 
    res.json(rows[0]);
}

export const getReuniones = async (req, res) => {
    const {idusuario} = req.body
    const [rows] = await pool.query("CALL ObtenerInformacionControlesPorCategoria(?, 4);",[idusuario]) 
    res.json(rows[0]);
}

export const getRecursos = async (req, res) => {
    const {idusuario} = req.body
    const [rows] = await pool.query("CALL ObtenerInformacionControlesPorCategoria(?, 5);",[idusuario]) 
    res.json(rows[0]);
}