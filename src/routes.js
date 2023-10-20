//importacion de modulos
import { Router } from "express";
import { libro } from "./controller.js";

//Creacion de una instancia de Route 
export const router = Router();

// Definicion de rutas para acciones de lectura
router.get('/libros', libro.getAll); // Invocación a getAll del objeto libro (devuelve una lista de todos los libros)
router.get('/libros/:id', libro.getOne);// Invocación a getOne del objeto libro (devuelve los detalles de un libro específico basado en su id.)

// Rutas para el cumplimiento de pautas del trabajo integrador  
router.post('/libros', libro.add); // Invocación a add del objeto libro (agrega un nuevo libro)
router.put('/libros', libro.update); // Invocación al método update del objeto libro (actializa un libro con el id de req.body)
