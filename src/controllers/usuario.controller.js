import { pool } from "../db.js"

export const getUsuarios = async (req, res) => {
    const [result] = await pool.query("CALL ListarUsuarios;")
    res.json(result[0])
}

export const getUsuario = async (req, res) => {
    const [result] = await pool.query("CALL ListarUsuarios;")
    res.json(result[0])
}


export const createUsuario = async (req, res) => {
    
    const {nombres, docidentidad, fechanac, telefono, correo, contrasena} = req.body
    const [rows] = await pool.query("INSERT INTO USUARIO (nombres, docidentidad, fechanac, telefono, correo, contrasena) VALUES(?, ?, ?, ?, ?, ?);",
                                                                                    [nombres, docidentidad, fechanac, telefono, correo, contrasena])
    res.send({
        idusuario: rows.insertId, nombres, docidentidad, fechanac, telefono, correo, contrasena,
    })
    
}