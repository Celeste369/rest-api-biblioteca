// Importacion del pool de conexión creado en database.js
import { pool } from "./database.js";
import validarLibro from "./validation.js";


class LibroController{
    // Acción agregar libro
    async add(req, res) {
        const libro = req.body;
    
        try {
            // Validación de entrada
            validarLibro(libro);
            
            // Convertir el año de publicación en una fecha completa
            libro.añoPublicacion = `${libro.añoPublicacion}-01-01`;
    
            // Verificar si el libro ya existe
            const [existingBooks] = await pool.query('SELECT * FROM libros WHERE ISBN = ?', [libro.ISBN]);
            if (existingBooks.length > 0) {
                return res.status(400).json({ error: "El libro con este ISBN ya existe." });
            }
    
            // Si no existe, inserta el nuevo libro
            const [result] = await pool.query('INSERT INTO libros(nombre, autor, categoria, añoPublicacion, ISBN) VALUES (?, ?, ?, ?, ?)', [libro.nombre, libro.autor, libro.categoria, libro.añoPublicacion, libro.ISBN]);
            res.json({ "id insertado": result.insertId });
    
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    
  
    // Accion de lectura de todos los registros de libros 
    async getAll(req, res) {
      try {
          const [result] = await pool.query('SELECT * FROM libros'); // Consulta por todos lo libros y guarga resultado en result
  
          if (result.length === 0) { // Si el resultado de la consulta no contiene registros retorna messaje: "No se encontraron libros" 
              return res.status(404).json({ message: "No se encontraron libros" });
          }
          // Iterar sobre el resultado y modificar el campo añoPublicacion para mostrar solo el año
        for (let libro of result) {
            libro.añoPublicacion = new Date(libro.añoPublicacion).getFullYear();
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
         // Convertir la fecha completa del campo añoPublicacion a solo el año
        result[0].añoPublicacion = new Date(result[0].añoPublicacion).getFullYear();

         res.json(result[0]); 
      } catch(err) { // Lanza una excepciones por error que puede ocurrir en el servidor
          console.error(err);
          res.status(500).json({ message: 'Error interno del servidor' });
      }
  }
  

}
// Creación y exportación de una instancia de LibroController()
export const libro = new LibroController();