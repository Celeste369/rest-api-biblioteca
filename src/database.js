// Importacion del modulo mysql2
import mysqlConnection from 'mysql2/promise';

// Propiedades para la conexión a la base de datos 
const properties ={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_biblioteca'
};

// Creacion y exportación de un pool de conexión con las propiedades definidas en properties
export const pool = mysqlConnection.createPool(properties);