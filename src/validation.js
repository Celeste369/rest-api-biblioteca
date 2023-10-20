/**
 * Función `validarLibro`: valida que un objeto `libro` contenga los campos requeridos y solo esos campos.
 *
 * @param {Object} libro - Objeto que representa un libro.
 * @param {string} libro.nombre - Nombre del libro.
 * @param {string} libro.autor - Autor del libro.
 * @param {string} libro.categoria - Categoría a la que pertenece el libro.
 * @param {number} libro.añoPublicacion - Año en que se publicó el libro.
 * @param {string} libro.ISBN - Número ISBN del libro.
 * @param {number} [libro.id] - Identificador único del libro (opcional).
 * 
 * @throws {Error} - Lanza un error si el libro no contiene algún campo requerido.
 * @throws {Error} - Lanza un error si el libro contiene campos no permitidos.
 *
 * @example
 * const libro = {
 *     nombre: "El Principito",
 *     autor: "Antoine de Saint-Exupéry",
 *     categoria: "Ficción",
 *     añoPublicacion: 1943,
 *     ISBN: "978-3-16-148410-0"
 * };
 * validarLibro(libro);  // No lanza error
 *
 * const libroIncorrecto = {
 *     nombre: "El Principito",
 *     autor: "Antoine de Saint-Exupéry",
 *     categoria: "Ficción",
 *     añoPublicacion: 1943,
 *     ISBN: "978-3-16-148410-0",
 *     stock: 100
 * };
 * validarLibro(libroIncorrecto);  // Lanza error: Campo no permitido: stock
 *
 */



function validarLibro(libro) {
    if (!libro.nombre || !libro.autor || !libro.categoria || !libro.añoPublicacion || !libro.ISBN) {
        throw new Error("Datos incompletos. Asegúrese de proporcionar nombre, autor, categoria año de publicacion e ISBN.");
    }
  
    const validFields = ["id", "nombre", "autor", "categoria", "añoPublicacion", "ISBN"];
    const incomingFields = Object.keys(libro);
    for (let field of incomingFields) {
        if (!validFields.includes(field)) {
            throw new Error(`Campo no permitido: ${field}`);
        }
    }
  }

  export default validarLibro;