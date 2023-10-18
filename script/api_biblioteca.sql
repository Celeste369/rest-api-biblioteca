-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2023 a las 18:12:04
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_biblioteca`
--
CREATE DATABASE IF NOT EXISTS `api_biblioteca` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `api_biblioteca`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 15-10-2023 a las 02:31:09
-- Última actualización: 15-10-2023 a las 15:11:59
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `añoPublicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `añoPublicacion`, `ISBN`) VALUES
(1, 'El viento en los sauces', 'Kenneth Grahame', 'Ficción', '1908-01-01', '978-123456789'),
(2, 'Fundación', 'Isaac Asimov', 'Ciencia Ficción', '1951-01-01', '978-098765432'),
(3, 'Orgullo y prejuicio', 'Jane Austen', 'Romance', '1813-01-01', '978-112233445'),
(4, '1984', 'George Orwell', 'Distopía', '1949-01-01', '978-223344556'),
(5, 'La odisea', 'Homero', 'Epopeya', '0800-01-01', '978-334455667'),
(6, 'Cien años de soledad', 'Gabriel García Márquez', 'Realismo Mágico', '1967-01-01', '978-445566778'),
(7, 'Matar a un ruiseñor', 'Harper Lee', 'Histórica', '1960-01-01', '978-556677889'),
(8, 'El arte de la guerra', 'Sun Tzu', 'Estrategia', '0500-01-01', '978-667788990'),
(9, 'El principito', 'Antoine de Saint-Exupéry', 'Fantasía', '1943-01-01', '978-778899001'),
(10, 'Frankenstein', 'Mary Shelley', 'Horror', '1818-01-01', '978-889900112');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
