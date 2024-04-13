import { pool } from "../db.js"

export const postIniciarSesion = async (req, res) => {
    const {docidentidad, contrasena} = req.body
    const [rows] = await pool.query("CALL AutenticarUsuario(?, ?);",[docidentidad, contrasena])
    const resultado = rows[0][0];   
    resultado.rpta = (resultado.rpta === "true");
    resultado.idusuario = resultado.idusuario.toString();
    res.json(resultado);

}