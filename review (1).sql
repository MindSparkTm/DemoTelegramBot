-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2017 at 02:11 PM
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
(46, '000122', 'Good'),
(47, '0112', 'Great'),
(48, '0112', 'excellent'),
(49, '0333', 'This is great.I love it'),
(50, '09876965', 'Informative'),
(51, '12344657', 'This is test '),
(52, '1111', 'This is nice'),
(53, '0728555156', 'Its great'),
(54, '000000', 'Appealing '),
(55, '321', 'Awesome'),
(56, '133354', 'Grear'),
(57, '34555', 'Ok ok '),
(58, '123456', 'xx'),
(59, '678965', 'Awesome');

-- --------------------------------------------------------

--
-- Table structure for table `flutterwavecardenquiry`
--

CREATE TABLE `flutterwavecardenquiry` (
  `id` int(100) NOT NULL,
  `otpreferencenumber` varchar(500) NOT NULL,
  `transactionreferencenumber` varchar(500) NOT NULL,
  `date` datetime(6) NOT NULL,
  `Balance` varchar(500) NOT NULL,
  `accountnumber` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flutterwavecardenquiry`
--

INSERT INTO `flutterwavecardenquiry` (`id`, `otpreferencenumber`, `transactionreferencenumber`, `date`, `Balance`, `accountnumber`) VALUES
(1, '1125664', '4565863', '2017-09-14 12:58:53.000000', '500', '123456'),
(2, '1123586644', '1234568', '2017-09-16 00:00:00.000000', '1000', '123456'),
(3, '1123586644', '1234568', '2017-09-16 00:00:00.000000', '5000', '123456');

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
(31, '35055', '000122'),
(32, '57045', '0112'),
(33, '38858', '0112'),
(34, '79290', '0333'),
(35, '13125', '09876965'),
(36, '53959', '12344657'),
(37, '31084', '1111'),
(38, '59065', '0728555156'),
(39, '71451', '000000'),
(40, '72656', '321'),
(41, '51981', '133354'),
(42, '44949', '34555'),
(43, '94282', '123456'),
(44, '97449', '678965');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `botdata`
--
ALTER TABLE `botdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flutterwavecardenquiry`
--
ALTER TABLE `flutterwavecardenquiry`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `flutterwavecardenquiry`
--
ALTER TABLE `flutterwavecardenquiry`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `uniquereviewtoken`
--
ALTER TABLE `uniquereviewtoken`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
