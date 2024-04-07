import { request } from "express"
import { pool } from "../db.js"

export const getHijos = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM hijos;")
    res.json(rows)
}

export const getHijosporPadre = async (req, res) => {
    const [rows] = await pool.query("CALL BuscarHijosPorPadre(?);",[req.params.id])
    res.json(rows[0])
}
