import express from "express"
import inicioSesion from "./routes/iniciosesion.routes.js";
import indexRoutes from "./routes/index.routes.js"
import usuarioRoutes from "./routes/usuario.routes.js"
import hijos from "./routes/hijos.routes.js"
import controles from "./routes/controles.routes.js"

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use("/api/",inicioSesion)
app.use("/api/",usuarioRoutes)
app.use("/api/",hijos)
app.use("/api/",controles)

app.use((req, res, next) => {
    res.status(404).json({
        mensaje: 'api no encontrada'
    })
})

export default app;