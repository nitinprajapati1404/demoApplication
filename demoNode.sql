-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 30, 2017 at 03:29 PM
-- Server version: 5.6.31-0ubuntu0.15.10.1
-- PHP Version: 5.6.11-1ubuntu3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demoNode`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE IF NOT EXISTS `addresses` (
  `addressId` int(11) NOT NULL,
  `addressDesc` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `alternetPhoneNumber` varchar(255) DEFAULT NULL,
  `emailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`addressId`, `addressDesc`, `phoneNumber`, `alternetPhoneNumber`, `emailId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'tessdfsdfsdfsdfdsft ', 'test desc', 'teessfsddfdsfsf', 'test@gmail.com', 1, '2017-05-30 04:33:44', '2017-05-30 04:33:44');

-- --------------------------------------------------------

--
-- Table structure for table `clientsFeedBacks`
--

CREATE TABLE IF NOT EXISTS `clientsFeedBacks` (
  `clientId` int(11) NOT NULL,
  `clientName` varchar(255) DEFAULT NULL,
  `clientPosition` varchar(255) DEFAULT NULL,
  `clientFeedback` text,
  `clientImage` varchar(255) DEFAULT NULL,
  `clientImageRandom` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clientsFeedBacks`
--

INSERT INTO `clientsFeedBacks` (`clientId`, `clientName`, `clientPosition`, `clientFeedback`, `clientImage`, `clientImageRandom`, `isActive`) VALUES
(2, 'rwerwe erwertest', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,st laborum.', 'Screenshot from 2016-08-02 16-07-58.png', 'Screenshot_from 2016-08-02 16-07-58_tWdx.png', 1),
(5, 'rwerwe erwertest', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,st laborum.', 'Screenshot from 2016-09-01 10-30-00.png', 'Screenshot_from 2016-09-01 10-30-00_rao1.png', 1),
(6, 'rwerwe erwertest', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', NULL, 'Screenshot from 2016-09-01 10-30-00.png', 'Screenshot_from 2016-09-01 10-30-00_TIjs.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE IF NOT EXISTS `cms` (
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`cmsId`, `cmsName`, `cmsDisplayName`, `cmsShortDesc`, `cmsLongDesc`, `cmspagebanner`, `cmspagebannerRandom`, `isActive`, `createdAt`, `updatedAt`) VALUES
(2, 'about_us', 'teer', 'dflkgj dfgj lkdfgjlkd lkdfgdflkg lkdfdfdfdfgjdfkgj \r\n dfkgjdflkg \r\nddfgkj df''gd\r\nfg\r\ndg\r\ndfgd\r\nfgdf\r\ngdf\r\ndf\r\nf\r\ndf\r\nd\r\nf', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\n', NULL, NULL, 1, '2017-05-25 06:28:48', '2017-05-25 06:28:48');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE IF NOT EXISTS `contactus` (
  `contactId` int(11) NOT NULL,
  `contactName` varchar(255) DEFAULT NULL,
  `ConatctLastName` varchar(255) DEFAULT NULL,
  `contactEmailId` varchar(255) DEFAULT NULL,
  `contactPhone` varchar(20) DEFAULT NULL,
  `InquiryProductName` varchar(255) DEFAULT NULL,
  `InfoDesc` varchar(255) DEFAULT NULL,
  `contactedUser` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `isDelete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`contactId`, `contactName`, `ConatctLastName`, `contactEmailId`, `contactPhone`, `InquiryProductName`, `InfoDesc`, `contactedUser`, `isActive`, `isDelete`, `createdAt`, `updatedAt`) VALUES
(2, 'tessdfsdfsdfsdfdsft ', NULL, NULL, NULL, 'test desc', 'teessfsddfdsfsf', 0, 1, 0, '2017-05-25 06:50:06', '2017-05-25 06:50:06'),
(3, 'tessdfsdfsdfsdfdsft ', NULL, NULL, NULL, 'test desc', 'teessfsddfdsfsf', 0, 1, 0, '2017-05-25 06:50:06', '2017-05-25 06:50:06'),
(9, 'fdsfsd', 'dfsfs', 'fdsfd@dfs.com', '2343242343', 'df', 'd', 0, 1, 0, '2017-05-29 07:58:55', '2017-05-29 07:58:55'),
(10, 'dfsf', 'dfsf', 'dsfsdf@dfs.xo', '2343242343', 'df', 'f', 0, 1, 0, '2017-05-29 07:59:58', '2017-05-29 07:59:58'),
(11, 'cvx', 'cx', 'dsfsdf@dfs.xo', '2343242343', 'vxc', 'xv', 0, 1, 0, '2017-05-29 08:00:41', '2017-05-29 08:00:41'),
(12, 'fsfsd', 'dsfs', 'dsfsdf@dfs.xo', '2343242343', 'productName', 'dsfsdf', 0, 1, 0, '2017-05-29 09:45:29', '2017-05-29 09:45:29'),
(13, 'dfsfsdds', 'dgdsfds', 'fdsfd@dfs.com', '2343242343', 'productName', 'dssdfsd', 0, 1, 0, '2017-05-29 09:46:27', '2017-05-29 09:46:27'),
(14, 'dsf', 'ds', 'fdsfd@dfs.com', '2343242343', 'productName', 'sads', 0, 1, 0, '2017-05-29 09:51:46', '2017-05-29 09:51:46'),
(15, 'csdsd', 'sdad', 'dsfsdf@dfs.xo', '2343242343', 'productName', 'dsada', 0, 1, 0, '2017-05-29 09:54:11', '2017-05-29 09:54:11'),
(16, 'dfg', 'gdfgd', 'dsfsdf@dfs.xo', '2343242343', 'productName', 'f', 0, 1, 0, '2017-05-29 09:56:37', '2017-05-29 09:56:37'),
(17, 'dfg', 'gdfgd', 'fdsfd@dfs.com', '1234568790', 'sdfdsfds', 'dsfdsfdsfdsfdsfdsfsdfdsfdsfsdfdsfsdfdsfsd ddsfr', 0, 1, 0, '2017-05-29 10:25:26', '2017-05-29 10:25:26'),
(18, 'dfsfds', 'dfsf', 'fdsfd@dfs.com', '2343242343', 'productName', 'dsdsff', 0, 1, 0, '2017-05-29 10:27:19', '2017-05-29 10:27:19'),
(19, 'tessdfsdfsdfsdfdsft ', 'test desc', 'test@gmail.com', '1234657890', 'teeere', 'ttrerew', 0, 1, 0, '2017-05-30 07:47:33', '2017-05-30 07:47:33'),
(20, 'tessdfsdfsdfsdfdsft ', 'test desc', 'test@gmail.com', '1234657890', 'teeere', 'ttrerew', 0, 1, 0, '2017-05-30 07:48:35', '2017-05-30 07:48:35');

-- --------------------------------------------------------

--
-- Table structure for table `goals`
--

CREATE TABLE IF NOT EXISTS `goals` (
  `goalId` int(11) NOT NULL,
  `goalTitle` varchar(100) DEFAULT NULL,
  `goalDesc` varchar(255) DEFAULT NULL,
  `isGoal` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goals`
--

INSERT INTO `goals` (`goalId`, `goalTitle`, `goalDesc`, `isGoal`) VALUES
(2, 'Engineers', 'Continually provide access to interoperable strategic theme areas for functionalized data. Professionally whiteboard team building platforms.', 0),
(3, 'Quality Materials', 'Continually provide access to interoperable strategic theme areas for functionalized data. Professionally whiteboard team building platforms.', 0),
(4, '\r\nRight Plans', 'Continually provide access to interoperable strategic theme areas for functionalized data. Professionally whiteboard team building platforms.', 0),
(5, 'Sample Design', 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi quis nostrud exercitation ullamco laboris nisi', 1),
(6, 'Test Design', 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi quis nostrud exercitation ullamco laboris nisi', 1),
(7, 'Quick Completion', 'Continually provide access to interoperable strategic theme areas for functionalized data. Professionally whiteboard team building platforms.', 0),
(8, 'Creative Design', 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi quis nostrud exercitation ullamco laboris nisi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `myaddresses`
--

CREATE TABLE IF NOT EXISTS `myaddresses` (
  `addressId` int(11) NOT NULL,
  `addressDesc` varchar(255) DEFAULT NULL,
  `cityName` varchar(255) DEFAULT NULL,
  `countryName` varchar(255) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `alternetPhoneNumber` varchar(255) DEFAULT NULL,
  `emailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `myaddresses`
--

INSERT INTO `myaddresses` (`addressId`, `addressDesc`, `cityName`, `countryName`, `pincode`, `phoneNumber`, `alternetPhoneNumber`, `emailId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'tessdfsdfsdfsdfdsft ', 'Test', 'Test', '380001', '1234567890', '0123456789', 'test@gmail.com', 1, '2017-05-30 04:34:20', '2017-05-30 04:35:22');

-- --------------------------------------------------------

--
-- Table structure for table `newslatters`
--

CREATE TABLE IF NOT EXISTS `newslatters` (
  `newslatterId` int(11) NOT NULL,
  `newslattereEmailId` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newslatters`
--

INSERT INTO `newslatters` (`newslatterId`, `newslattereEmailId`, `isActive`) VALUES
(2, 'tes@gmail.com', 1),
(3, 'tes@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `productImages`
--

CREATE TABLE IF NOT EXISTS `productImages` (
  `productImageId` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageRandom` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `isDelete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productImages`
--

INSERT INTO `productImages` (`productImageId`, `image`, `imageRandom`, `isActive`, `isDelete`, `createdAt`, `updatedAt`, `productId`) VALUES
(4, 'portfolio-1.jpg', 'portfolio-1.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 2),
(5, 'portfolio-3.jpg', 'portfolio-3.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 2),
(6, 'portfolio-2.jpg', 'portfolio-2.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 2),
(7, 'portfolio-5.jpg', 'portfolio-5.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 2),
(8, 'portfolio-4.jpg', 'portfolio-4.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 2),
(9, 'portfolio-3.jpg', 'portfolio-3.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 3),
(10, 'portfolio-5.jpg', 'portfolio-5.jpg', 1, 0, '2017-05-24 13:47:23', '2017-05-24 13:47:23', 3);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productShortDesc`, `productDesc`, `productThumbImage`, `productThumbImageRandom`, `productHomePageImage`, `productHomePageImageRandom`, `productCatelog`, `productCatelogRandom`, `showOnHomePage`, `isActive`, `isDelete`, `createdAt`, `updatedAt`) VALUES
(2, 'testeerere', 'ITs 1 st projdtcc', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\n', 'blog-1.jpg', 'blog-1.jpg', 'banner.jpg', 'banner.jpg', 'Screenshot from 2016-09-13 10-47-28.png', 'Screenshot_from 2016-09-13 10-47-28_N8KP.png', 1, 1, 0, '2017-05-24 13:42:11', '2017-05-24 14:05:37'),
(3, 'rwerwe erwertest', 'ITs2 st projdtcc', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora ducimus non est harum inventore optio esse ven iam iusto impedit explicabo ratione id iure, pariatur nihil nulla quae quam recusandae.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, odio, cumque. Soluta porro voluptatibus illo rerum ducimus ad error assumenda dignissimos aspernatur commodi mollitia asperiores doloribus, placeat veniam nam.\r\n\r\nwe would love to hear from you\r\n', 'blog-1.jpg', 'blog-1.jpg', 'banner.jpg', 'banner.jpg', 'Screenshot from 2016-09-06 18-03-50.png', 'Screenshot_from 2016-09-06 18-03-50_nt3M.png', 1, 1, 0, '2017-05-25 13:53:47', '2017-05-25 13:53:47'),
(4, 'rwerwe erwertest', 'rewewrew erew ', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'blog-1.jpg', 'blog-1.jpg', NULL, NULL, NULL, NULL, 1, 1, 0, '2017-05-26 06:41:35', '2017-05-26 06:41:35'),
(5, 'rwerwe erwertest', 'ITs2 st projdtcc', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'blog-1.jpg', 'blog-1.jpg', 'banner.jpg', 'banner.jpg', 'Screenshot from 2016-09-06 18-03-50.png', 'Screenshot_from 2016-09-06 18-03-50_nt3M.png', 1, 1, 0, '2017-05-25 13:53:47', '2017-05-25 13:53:47'),
(6, 'rwerwe erwertest', 'ITs2 st projdtcc', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'blog-1.jpg', 'blog-1.jpg', 'banner.jpg', 'banner.jpg', 'Screenshot from 2016-09-06 18-03-50.png', 'Screenshot_from 2016-09-06 18-03-50_nt3M.png', 1, 1, 0, '2017-05-25 13:53:47', '2017-05-25 13:53:47'),
(7, 'rwerwe erwertest', 'rewewrew erew ', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'blog-1.jpg', 'blog-1.jpg', NULL, NULL, NULL, NULL, 0, 1, 0, '2017-05-26 06:41:35', '2017-05-26 06:41:35'),
(8, 'rwerwe erwertest', 'ITs2 st projdtcc', 'fsfsfsdfsfsdfsdfsdfsdfdsfsdfs', 'blog-1.jpg', 'blog-1.jpg', 'banner.jpg', 'banner.jpg', 'Screenshot from 2016-09-06 18-03-50.png', 'Screenshot_from 2016-09-06 18-03-50_nt3M.png', 0, 1, 0, '2017-05-25 13:53:47', '2017-05-25 13:53:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`addressId`);

--
-- Indexes for table `clientsFeedBacks`
--
ALTER TABLE `clientsFeedBacks`
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
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `clientsFeedBacks`
--
ALTER TABLE `clientsFeedBacks`
  MODIFY `clientId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `cmsId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `goals`
--
ALTER TABLE `goals`
  MODIFY `goalId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `myaddresses`
--
ALTER TABLE `myaddresses`
  MODIFY `addressId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `newslatters`
--
ALTER TABLE `newslatters`
  MODIFY `newslatterId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `productImages`
--
ALTER TABLE `productImages`
  MODIFY `productImageId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
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
