-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2017 at 03:15 PM
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
(1, 'rwerwe erwertest fsdfsdfdsfdsfsdfsdfsdfsddsffdsdsfdsfdfsdsfdfs', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', NULL, 'testimonial-2.jpg', 'testimonial-2_BJwr.jpg', 1),
(2, 'rwerwe erwertest fsdfsdfdsfdsfsdfsdfsdfsddsffdsdsfdsfdfsdsfdfs', 'teju', NULL, 'testimonial-2.jpg', 'testimonial-2_P3hw.jpg', 1),
(3, 'wewew', 'teju', NULL, 'testimonial-2.jpg', 'testimonial-2_4tEV.jpg', 1),
(4, 'wewew', 'teju', NULL, 'testimonial-2.jpg', 'testimonial-2_rEUn.jpg', 1);

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
(1, 'about_us', 'About US', 'sfdfsf ffsdsdf dsfs fsdfsdfsdfssdfsdf sdf', 'gd fd sdfsdf sdsfdsfds dsf \r\nf \r\ndfs \r\nds f\r\ndsf sd\r\nf sdfd\r\nf ssdfsdsd\r\nsd\r\nfd\r\nfsd\r\nsd\r\nf\r\ndfsd\r\nd\r\nfs\r\ndf', 'banner.jpg', 'banner_eSoh.jpg', 1, '2017-06-03 08:34:51', '2017-06-03 08:34:51');

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
(3, 'ritesj', 'er', 'test@gmail.com', '1234567890', 'productName', 'qwwwww', 0, 1, 0, '2017-06-19 17:43:02', '2017-06-19 17:43:02');

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE `goals` (
  `goalId` int(11) NOT NULL,
  `goalTitle` varchar(255) DEFAULT NULL,
  `goalDesc` varchar(255) DEFAULT NULL,
  `isGoal` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`goalId`, `goalTitle`, `goalDesc`, `isGoal`) VALUES
(1, 'tessdfsdfsdfsdfdsft ', 'test desc', 1),
(2, 'tessdfsdfsdfsdfdsft ', 'test desc', 1),
(3, 'tessdfsdfsdfsdfdsft ', 'test desc', 1),
(4, 'tessdfsdfsdfsdfdsft ', 'test desc', 1),
(5, 'tessdfsdfsdfsdfdsft ', 'test desc', 0),
(6, 'tessdfsdfsdfsdfdsft ', 'test desc', 0),
(7, 'tessdfsdfsdfsdfdsft ', 'test desc', 0),
(8, 'tessdfsdfsdfsdfdsft ', 'test desc', 0);

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
(1, 'ahmedabad', 'ahmedabad', 'india', '380001', '1234567890', '1234567890', 'test@gmail.com', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `newslatters`
--

CREATE TABLE `newslatters` (
  `newslatterId` int(11) NOT NULL,
  `newslattereEmailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
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
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`productImageId`, `image`, `imageRandom`, `isActive`, `isDelete`, `createdAt`, `updatedAt`, `productId`) VALUES
(1, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:04', '2017-06-03 08:32:04', 1),
(2, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:06', '2017-06-03 08:32:06', 1),
(3, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:07', '2017-06-03 08:32:07', 1),
(4, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:08', '2017-06-03 08:32:08', 1),
(5, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:08', '2017-06-03 08:32:08', 1),
(6, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:19', '2017-06-03 08:32:19', 2),
(7, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:20', '2017-06-03 08:32:20', 2),
(8, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:20', '2017-06-03 08:32:20', 2),
(9, 'blog-1.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-03 08:32:20', '2017-06-03 08:32:20', 2),
(10, 'download.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-08 14:38:44', '2017-06-08 14:38:44', 2),
(11, 'download_KmRn.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-08 14:38:44', '2017-06-08 14:38:44', 2),
(12, 'download_KmRn.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-08 15:32:10', '2017-06-08 15:32:10', 8),
(13, 'images.jpg', 'cw-image2_1ynY.jpg', 1, 0, '2017-06-08 15:32:10', '2017-06-08 15:32:10', 8),
(14, 'download_KmRn.jpg', 'download_KmRn_rsUa.jpg', 1, 0, '2017-06-08 15:42:53', '2017-06-08 15:42:53', 8);

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
(1, 'product 1', 'vbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'cw-image2.jpg', 'cw-image2_1ynY.jpg', 'images.jpg', 'cw-image2_1ynY.jpg', 'CF000387.jpg', 'download_x8Ny.jpg', 1, 1, 0, '2017-06-03 08:30:36', '2017-06-03 08:30:36'),
(2, 'product 2', 'vbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'images.jpg', 'cw-image2_1ynY.jpg', 'CF000387.jpg', 'cw-image2_1ynY.jpg', 'CF000387.jpg', 'download_x8Ny.jpg', 1, 1, 0, '2017-06-03 08:31:05', '2017-06-03 08:31:05'),
(3, 'product 3', 'vbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg\r\nvbvbn hgh hgh hj gjhghjg jjjhg hjhg jhjg jg g g gjhjggggg', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'CF000387.jpg', 'CF000387_Coa5.jpg', 'images.jpg', 'cw-image2_1ynY.jpg', 'CF000387.jpg', 'download_x8Ny.jpg', 0, 1, 0, '2017-06-03 08:31:17', '2017-06-03 08:31:17'),
(7, 'qwertyyt', 'rerwerwerwer', 'rereer', 'images.jpg', 'cw-image2_1ynY.jpg', 'download_KmRn.jpg', 'download_KmRn_3A3H.jpg', 'CF000387_54XC.jpg', 'download_x8Ny.jpg', 0, 1, 0, '2017-06-07 18:08:36', '2017-06-08 15:50:57'),
(8, 'Test Product from admin', 'test product short descxriotp ssdad', 'king srfsjkf jklsdfjskldfj klsdfjs kljskljsdklf lkdfjsdklfj kldflksfkl klsjlkfdsklfjlkdjdskfjsdfjdfjlksdj fslkdfjdslk', 'images.jpg', 'images_ifDE.jpg', 'cw-image2.jpg', 'download_KmRn_3A3H.jpg', 'CF000387_54XC.jpg', 'CF000387_54XC_KML4.jpg', 0, 1, 0, '2017-06-07 18:14:57', '2017-06-08 15:49:44');

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
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
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
  MODIFY `clientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `cmsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
  MODIFY `newslatterId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `productImageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
