-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2017 at 12:43 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demonode`
--
CREATE DATABASE IF NOT EXISTS `demonode` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `demonode`;

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `addressId` int(11) NOT NULL,
  `addressDesc` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `alternetPhoneNumber` varchar(255) DEFAULT NULL,
  `emailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `clientsfeedbacks`
--

CREATE TABLE `clientsfeedbacks` (
  `clientId` int(11) NOT NULL,
  `clientName` varchar(255) DEFAULT NULL,
  `clientPosition` varchar(255) DEFAULT NULL,
  `clientFeedback` varchar(255) DEFAULT NULL,
  `clientImage` varchar(255) DEFAULT NULL,
  `clientImageRandom` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clientsfeedbacks`
--

INSERT INTO `clientsfeedbacks` (`clientId`, `clientName`, `clientPosition`, `clientFeedback`, `clientImage`, `clientImageRandom`, `isActive`) VALUES
(1, 'client 1', 'CEO', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 'testimonial-2.jpg', 'testimonial-2_BJwr.jpg', 1),
(2, 'client 2', 'CTO', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 'testimonial-2.jpg', 'testimonial-2_P3hw.jpg', 1),
(3, 'client 3', 'Delivery Head', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 'testimonial-2.jpg', 'testimonial-2_4tEV.jpg', 1),
(4, 'client 4', 'Project Manager', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\'</div>', 'MountainsinWinter_Tablet.jpg', 'MountainsinWinter_Tablet_gSsv.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE `cms` (
  `cmsId` int(11) NOT NULL,
  `cmsName` varchar(255) DEFAULT NULL,
  `cmsDisplayName` varchar(255) DEFAULT NULL,
  `cmsShortDesc` text,
  `cmsLongDesc` text,
  `cmspagebanner` varchar(255) DEFAULT NULL,
  `cmspagebannerRandom` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`cmsId`, `cmsName`, `cmsDisplayName`, `cmsShortDesc`, `cmsLongDesc`, `cmspagebanner`, `cmspagebannerRandom`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'about_us', 'About US', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</div>', '<div><!--block-->Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br><br></div><div><!--block-->The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br></div>', 'banner.jpg', 'banner_eSoh.jpg', 1, '2017-06-03 08:34:51', '2017-07-22 10:12:31');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `contactId` int(11) NOT NULL,
  `contactName` varchar(255) DEFAULT NULL,
  `ConatctLastName` varchar(255) DEFAULT NULL,
  `contactEmailId` varchar(255) DEFAULT NULL,
  `contactPhone` varchar(255) DEFAULT NULL,
  `InquiryProductName` varchar(255) DEFAULT NULL,
  `InfoDesc` varchar(255) DEFAULT NULL,
  `contactedUser` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `isDelete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`contactId`, `contactName`, `ConatctLastName`, `contactEmailId`, `contactPhone`, `InquiryProductName`, `InfoDesc`, `contactedUser`, `isActive`, `isDelete`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test', 'test@gmail.com', '1235467980', 'productName', 'rwewewe', 0, 1, 0, '2017-06-03 08:48:10', '2017-06-03 08:48:10'),
(2, 'cvxxvx', 'vxcvcx', 'vxcvxcv@gmail.com', '1234567890', 'productName', 'sfsdfsdf', 0, 1, 0, '2017-06-08 13:54:19', '2017-06-08 13:54:19'),
(3, 'ritesj', 'er', 'test@gmail.com', '1234567890', 'productName', 'qwwwww', 0, 1, 0, '2017-06-19 17:43:02', '2017-06-19 17:43:02'),
(4, 'prakashbhai', 'prajapati', 'nitin@gmail.com', '1234567890', 'qqeert', 'terer', 0, 1, 0, '2017-07-20 16:04:34', '2017-07-20 16:04:34'),
(5, 'sda', 'sda', 'test@gmail.com', '1234567890', 'productName', 'sfslfsdflksdf', 0, 1, 0, '2017-07-22 10:28:17', '2017-07-22 10:28:17');

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `goalId` int(11) NOT NULL,
  `goalTitle` varchar(255) DEFAULT NULL,
  `goalDesc` varchar(255) DEFAULT NULL,
  `isGoal` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`goalId`, `goalTitle`, `goalDesc`, `isGoal`) VALUES
(1, 'Goal 1', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 1),
(2, 'goal 2', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 1),
(3, 'goal 3', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 1),
(5, 'why us 1', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown&nbsp;<strong>printer</strong>&nbsp;took a galle', 0),
(6, 'why us 2', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 0),
(7, 'why us 3', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ', 0),
(8, 'why us 4', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>', 0);

-- --------------------------------------------------------

--
-- Table structure for table `myaddresses`
--

CREATE TABLE `myaddresses` (
  `addressId` int(11) NOT NULL,
  `addressDesc` varchar(255) DEFAULT NULL,
  `cityName` varchar(255) DEFAULT NULL,
  `countryName` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `alternetPhoneNumber` varchar(255) DEFAULT NULL,
  `emailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `myaddresses`
--

INSERT INTO `myaddresses` (`addressId`, `addressDesc`, `cityName`, `countryName`, `pincode`, `phoneNumber`, `alternetPhoneNumber`, `emailId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'ahmedabad 1234', 'ahmedabad', 'india', '380001', '1234567890', '1234567890', 'test@gmail.com', 1, '0000-00-00 00:00:00', '2017-07-02 09:57:52');

-- --------------------------------------------------------

--
-- Table structure for table `newslatters`
--

CREATE TABLE `newslatters` (
  `newslatterId` int(11) NOT NULL,
  `newslattereEmailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newslatters`
--

INSERT INTO `newslatters` (`newslatterId`, `newslattereEmailId`, `isActive`) VALUES
(1, 'test@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `productImages`
--

CREATE TABLE `productImages` (
  `productImageId` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageRandom` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `isDelete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productImages`
--

INSERT INTO `productImages` (`productImageId`, `image`, `imageRandom`, `isActive`, `isDelete`, `createdAt`, `updatedAt`, `productId`) VALUES
(86, 'LakeinWinter_1600x1200.jpg', 'LakeinWinter_1600x1200_t1xj.jpg', 1, 0, '2017-07-22 10:25:58', '2017-07-22 10:25:58', 2),
(87, 'MountainsinWinter_1600x1200.jpg', 'MountainsinWinter_1600x1200_vTOG.jpg', 1, 0, '2017-07-22 10:25:58', '2017-07-22 10:25:58', 2),
(89, 'LakeinWinter_1600x1200.jpg', 'LakeinWinter_1600x1200_4kc5.jpg', 1, 0, '2017-07-22 10:26:31', '2017-07-22 10:26:31', 2),
(90, 'MountainsinWinter_1600x1200.jpg', 'MountainsinWinter_1600x1200_SyG3.jpg', 1, 0, '2017-07-22 10:26:31', '2017-07-22 10:26:31', 2),
(91, 'LakeinWinter_1600x1200.jpg', 'LakeinWinter_1600x1200_cyD4.jpg', 1, 0, '2017-07-22 10:27:07', '2017-07-22 10:27:07', 1),
(92, 'MountainsinWinter_1600x1200.jpg', 'MountainsinWinter_1600x1200_Ik6D.jpg', 1, 0, '2017-07-22 10:27:07', '2017-07-22 10:27:07', 1),
(94, 'LakeinWinter_1600x1200.jpg', 'LakeinWinter_1600x1200_xzbh.jpg', 1, 0, '2017-07-22 10:27:28', '2017-07-22 10:27:28', 1),
(95, 'MountainsinWinter_1600x1200.jpg', 'MountainsinWinter_1600x1200_4bgx.jpg', 1, 0, '2017-07-22 10:27:28', '2017-07-22 10:27:28', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productShortDesc` text,
  `productDesc` text,
  `productThumbImage` varchar(255) DEFAULT NULL,
  `productThumbImageRandom` varchar(255) DEFAULT NULL,
  `productHomePageImage` varchar(255) DEFAULT NULL,
  `productHomePageImageRandom` varchar(255) DEFAULT NULL,
  `productCatelog` varchar(255) DEFAULT NULL,
  `productCatelogRandom` varchar(255) DEFAULT NULL,
  `showOnHomePage` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `isDelete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productShortDesc`, `productDesc`, `productThumbImage`, `productThumbImageRandom`, `productHomePageImage`, `productHomePageImageRandom`, `productCatelog`, `productCatelogRandom`, `showOnHomePage`, `isActive`, `isDelete`, `createdAt`, `updatedAt`) VALUES
(1, 'product 1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>', 'download_x8Ny.jpg', 'download_x8Ny_MqPb.jpg', 'LakeinWinter_1600x1200.jpg', 'LakeinWinter_1600x1200_dwU9.jpg', 'download.jpg', 'download_sEO9.jpg', 1, 1, 0, '2017-06-03 08:30:36', '2017-07-22 10:16:32'),
(2, 'product 2g', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.', '<div><!--block--><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>', 'CF000387.jpg', 'CF000387_LVNW.jpg', 'MountainsinWinter_Tablet.jpg', 'MountainsinWinter_Tablet_wmoH.jpg', 'CF000387.jpg', 'CF000387_wfwq.jpg', 1, 1, 0, '2017-06-03 08:31:05', '2017-07-22 10:16:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`addressId`);

--
-- Indexes for table `clientsfeedbacks`
--
ALTER TABLE `clientsfeedbacks`
  ADD PRIMARY KEY (`clientId`);

--
-- Indexes for table `cms`
--
ALTER TABLE `cms`
  ADD PRIMARY KEY (`cmsId`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`contactId`);

--
-- Indexes for table `goals`
--
ALTER TABLE `goals`
  ADD PRIMARY KEY (`goalId`);

--
-- Indexes for table `myaddresses`
--
ALTER TABLE `myaddresses`
  ADD PRIMARY KEY (`addressId`);

--
-- Indexes for table `newslatters`
--
ALTER TABLE `newslatters`
  ADD PRIMARY KEY (`newslatterId`);

--
-- Indexes for table `productImages`
--
ALTER TABLE `productImages`
  ADD PRIMARY KEY (`productImageId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `clientsfeedbacks`
--
ALTER TABLE `clientsfeedbacks`
  MODIFY `clientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `cmsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `goalId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `myaddresses`
--
ALTER TABLE `myaddresses`
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `newslatters`
--
ALTER TABLE `newslatters`
  MODIFY `newslatterId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `productImages`
--
ALTER TABLE `productImages`
  MODIFY `productImageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `productImages`
--
ALTER TABLE `productImages`
  ADD CONSTRAINT `productImages_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
