//importacion de modulos para generar un servidor basado en Express
import express from "express";
import morgan from "morgan";
import { router } from "./routes.js";

// Incializacion de una instancia Express
const app = express();
// Configuracion del puerto en el que se ejecutará el servidor Express
app.set('port', 3000);

// Uso de midelwares
app.use(morgan('dev'));
app.use(express.json());

// Añadiendo rutas definidas en rutes.js
app.use(router);

// Iniciando el servidor en el pueto 3000
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})
