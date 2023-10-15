// Importacion del pool de conexión creado en database.js
import { pool } from "./database.js";

class LibroController{
  // Accion de lectura de todos los registros de libros 
    async getAll(req, res) {
      try {
          const [result] = await pool.query('SELECT * FROM libros'); // Consulta por todos lo libros y guarga resultado en result
  
          if (result.length === 0) { // Si el resultado de la consulta no contiene registros retorna messaje: "No se encontraron libros" 
              return res.status(404).json({ message: "No se encontraron libros" });
          }
  
          res.json(result); // Si el resultado de la consulta contiene registros los devuelve con formato json
      } catch (error) { // Lanza una excepcion por error interno del servidor
          console.error("Error al obtener todos los libros:", error);
          res.status(500).json({ message: "Error interno del servidor" });
      }
  }
   
  // Accion lectura un solo registro segun id especifico
   async getOne(req, res){
   try {
    const libro_id = req.params.id;  //guardamos en libro_id el ID que viene en la ruta de la petición"/libros/:id"
    const [result] = await pool.query('SELECT * FROM libros WHERE id=(?)', [libro_id]);//Consulta los detalles de un libro especifico segun el id que llega como parametro y los guarda en result 
  
      if(result.length === 0) { //Si no existen datos como resultado de la consulta responde con el mensaje='Libro no encontrado' 
         res.status(404).json({ message: 'Libro no encontrado' });
         return;
         }
  
         res.json(result[0]); //Si el resultado de la consulta trae datos asociados, devuelve solo el primer libro, que coincide con el ID 
      } catch(err) { // Lanza una excepciones por error que puede ocurrir en el servidor
          console.error(err);
          res.status(500).json({ message: 'Error interno del servidor' });
      }
  }
  

}
// Creación y exportación de una instancia de LibroController()
export const libro = new LibroController();