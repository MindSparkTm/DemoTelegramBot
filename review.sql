-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2017 at 04:28 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `review`
--

-- --------------------------------------------------------

--
-- Table structure for table `botdata`
--

CREATE TABLE `botdata` (
  `id` int(11) NOT NULL,
  `phonenumber` varchar(500) NOT NULL,
  `review` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `botdata`
--

INSERT INTO `botdata` (`id`, `phonenumber`, `review`) VALUES
(43, '0786894651', 'Great'),
(44, '0771621350', 'Good'),
(45, '123456', 'Great'),
(46, '000122', 'Good');

-- --------------------------------------------------------

--
-- Table structure for table `uniquereviewtoken`
--

CREATE TABLE `uniquereviewtoken` (
  `id` int(50) NOT NULL,
  `token` varchar(1000) NOT NULL,
  `phonenumber` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uniquereviewtoken`
--

INSERT INTO `uniquereviewtoken` (`id`, `token`, `phonenumber`) VALUES
(28, '74071', '0786894651'),
(29, '83036', '0771621350'),
(30, '58774', '123456'),
(31, '35055', '000122');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `botdata`
--
ALTER TABLE `botdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uniquereviewtoken`
--
ALTER TABLE `uniquereviewtoken`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `botdata`
--
ALTER TABLE `botdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `uniquereviewtoken`
--
ALTER TABLE `uniquereviewtoken`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
