-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 13, 2018 at 06:25 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `housing_ms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `admin_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`admin_id`, `user_name`, `user_pass`) VALUES
(1, 'sana', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `cat`
--

CREATE TABLE `cat` (
  `cat_id` int(3) NOT NULL,
  `cat_name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cat`
--

INSERT INTO `cat` (`cat_id`, `cat_name`) VALUES
(1, 'House'),
(2, 'Plot'),
(25, 'tt');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `message` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `name`, `email`, `contact_no`, `message`) VALUES
(1, 'naqeeb', 'naqeensufi2009@gmail.com', '03432142806', 'hello this is a test message'),
(2, 'naqeeb', 'naqeensufi2009@gmail.com', '03432142806', 'hello this is a test message'),
(3, 'FAHAD PASHA', 'fahad.pasha247@gmail.com', '03171048402', 'mkajfbivfhfdaf'),
(4, 'abdul rafay', 'abderafay@gmail.com', '03351316064', 'afafgsfasfsdgafd'),
(5, 'abdul rafay', 'abderafay@gmail.com', '03351316064', 'afafgsfasfsdgafd');

-- --------------------------------------------------------

--
-- Table structure for table `house`
--

CREATE TABLE `house` (
  `house_id` int(11) NOT NULL,
  `cate_id` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `soc_id` int(11) NOT NULL,
  `property_type` varchar(100) NOT NULL,
  `describtion` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `garages` varchar(100) NOT NULL,
  `flor` varchar(100) NOT NULL,
  `bedroom` varchar(100) NOT NULL,
  `bathroom` varchar(100) NOT NULL,
  `land_area` varchar(100) NOT NULL,
  `unit` varchar(100) NOT NULL,
  `img_id` int(5) NOT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `house`
--

INSERT INTO `house` (`house_id`, `cate_id`, `city`, `soc_id`, `property_type`, `describtion`, `location`, `price`, `garages`, `flor`, `bedroom`, `bathroom`, `land_area`, `unit`, `img_id`, `userid`) VALUES
(0, 1, 'Karachi', 3, 'something', 'something', 'something', '50000', '2', '2', '2', '2', '200', '2', 0, 9),
(0, 1, 'ishguasdakhbvg', 3, 'asjkbafskald', 'dsjfihbiskajld', 'aljkfjgashdavc', '50000', '2', '2', '2', '2', '100', '2', 0, 10),
(0, 1, 'Karachi', 3, 'asbhfasdjkhsad', 'ajkhbjsadlakjdk', 'akjskdlnbhajf', '90000', '2', '2', '2', '2', '200', '3', 0, 11),
(0, 2, 'Lahore', 4, 'aljbuafkdk', 'akjfhbasd', 'niuabahsdlni', '50000', '2', '2', '2', '2', '500', '2', 0, 12);

-- --------------------------------------------------------

--
-- Table structure for table `house_upload`
--

CREATE TABLE `house_upload` (
  `sno` int(11) NOT NULL,
  `house_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `garages` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `flor` varchar(10) DEFAULT NULL,
  `rel_date` date DEFAULT NULL,
  `bedroom` varchar(100) DEFAULT NULL,
  `bathroom` varchar(50) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  `cat_id` int(3) DEFAULT NULL,
  `descp` text,
  `land_area` varchar(100) DEFAULT NULL,
  `soc_id` int(11) DEFAULT NULL,
  `img_id` int(5) DEFAULT NULL,
  `uid` int(5) DEFAULT NULL,
  `sysdate` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `house_upload`
--

INSERT INTO `house_upload` (`sno`, `house_id`, `title`, `garages`, `location`, `flor`, `rel_date`, `bedroom`, `bathroom`, `unit`, `cat_id`, `descp`, `land_area`, `soc_id`, `img_id`, `uid`, `sysdate`) VALUES
(1, 1, 'Bangla at Gulshan Iqbal', 'Bangla at Gulshan Iqbal', 'Karachi', 'eng', '2020-12-17', '56', 'new', 'new', 0, 'ok', '99999.99', 0, 1, 1006, '2017-12-14'),
(2, 2, 'Bangla at Nazimabad', 'Bangla at Nazimabad', 'Karachi', 'eng', '2020-12-17', '56', 'new', 'new', 0, 'ok', '99999.99', 0, 2, 1006, '2017-12-14'),
(3, 3, 'Bangla at Nazimabad', 'Bangla at Nazimabad', 'Karachi', 'eng', '2020-12-17', '56', 'new', 'new', 0, 'ok', '99999.99', 0, 3, 1006, '2017-12-14'),
(4, 4, 'Bangla at Nazimabad', 'Bangla at Nazimabad', 'Karachi', 'eng', '2020-12-17', '56', 'new', 'new', 0, 'ok', '99999.99', 0, 4, 1006, '2017-12-14'),
(5, 5, 'Bangla at Defence', 'Bangla at Defence', 'Karachi', 'eng', '2020-12-17', '56', 'new', 'new', 0, 'sds', '99999.99', 0, 5, 1006, '2017-12-14');

-- --------------------------------------------------------

--
-- Table structure for table `img_upload`
--

CREATE TABLE `img_upload` (
  `img_id` int(5) NOT NULL,
  `img_path_1` varchar(200) DEFAULT NULL,
  `img_path_2` varchar(200) DEFAULT NULL,
  `img_path_3` varchar(200) DEFAULT NULL,
  `uid` int(5) DEFAULT NULL,
  `sysdate` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `img_upload`
--

INSERT INTO `img_upload` (`img_id`, `img_path_1`, `img_path_2`, `img_path_3`, `uid`, `sysdate`) VALUES
(1, 'uploads/1.jpg', 'uploads/1.jpg', 'uploads/1.jpg', 1006, '2017-12-14'),
(2, 'uploads/2.jpg', 'uploads/2.jpg', 'uploads/2.jpg', 1006, '2017-12-14'),
(3, 'uploads/3.jpg', 'uploads/3.jpg', 'uploads/3.jpg', 1006, '2017-12-14'),
(4, 'uploads/9.jpg', 'uploads/9.jpg', 'uploads/9.jpg', 1006, '2017-12-14'),
(5, 'uploads/4.jpg', 'uploads/4.jpg', 'uploads/4.jpg', 1006, '2017-12-14');

-- --------------------------------------------------------

--
-- Table structure for table `paid_amount`
--

CREATE TABLE `paid_amount` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paid_amount`
--

INSERT INTO `paid_amount` (`id`, `users_id`, `total_amount`) VALUES
(1, 1, 12),
(2, 1, 12),
(3, 9, 900),
(4, 9, 300),
(5, 9, 900),
(6, 9, 50);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `total_payments` int(11) NOT NULL,
  `installment_1` int(11) NOT NULL,
  `installment_2` int(11) NOT NULL,
  `installment_3` int(11) NOT NULL,
  `installment_4` int(11) NOT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `username`, `total_payments`, `installment_1`, `installment_2`, `installment_3`, `installment_4`, `userid`) VALUES
(5, 'fahad', 50000, 20000, 20000, 5000, 5000, 9),
(6, 'rafay', 60000, 2000, 20000, 10000, 10000, 10),
(7, 'adeel', 90000, 30000, 30000, 30000, 10000, 11),
(8, 'saim', 50000, 3000, 10000, 5000, 5000, 12);

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(30) NOT NULL,
  `service_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`service_id`, `service_name`, `service_price`) VALUES
(1, 'service one(Rs 100)', 100),
(2, 'service 2 (Rs 500)', 500),
(3, 'service (Rs 900)', 900),
(4, 'service (Rs 300)', 300),
(5, 'service (Rs 300)', 300),
(6, 'service (Rs 310)', 310);

-- --------------------------------------------------------

--
-- Table structure for table `service_request`
--

CREATE TABLE `service_request` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `request_content` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_request`
--

INSERT INTO `service_request` (`id`, `users_id`, `request_content`) VALUES
(2, 11, 'i need plumber'),
(7, 11, 'Gd');

-- --------------------------------------------------------

--
-- Table structure for table `society`
--

CREATE TABLE `society` (
  `id` int(11) NOT NULL,
  `sty_name` varchar(100) NOT NULL,
  `sty_area` varchar(100) NOT NULL,
  `sty_city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `society`
--

INSERT INTO `society` (`id`, `sty_name`, `sty_area`, `sty_city`) VALUES
(3, 'Shaheen Appertment', 'disco bakrey', 'karachi'),
(4, 'KDA Society', 'Gulshan Iqbal Scheme 33', 'Karachi');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `password` varchar(9) NOT NULL,
  `address` varchar(100) NOT NULL,
  `api_token` varchar(255) NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `contact`, `password`, `address`, `api_token`, `user_type`) VALUES
(9, 'fahad', 'fahad@gmail.com', '0323123323', 'fahad', 'test email', '61404', 'user'),
(10, 'rafay', 'rafay@gmail.com', '0323132133', 'rafay', 'aludgfadsdladfi', '', 'user'),
(11, 'adeel', 'adeel@gmail.com', '032156465654', 'adeel', 'Something useful', '', 'user'),
(12, 'saim', 'saim@gmail.com', '03231323123', 'saim', 'aibshdgaysdadih', '', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_attachment`
--

CREATE TABLE `user_attachment` (
  `ua_id` int(11) NOT NULL,
  `ua_img1` varchar(2000) NOT NULL,
  `ua_img2` varchar(2000) NOT NULL,
  `ua_img3` varchar(2000) NOT NULL,
  `ua_video` varchar(2000) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_attachment`
--

INSERT INTO `user_attachment` (`ua_id`, `ua_img1`, `ua_img2`, `ua_img3`, `ua_video`, `userid`) VALUES
(6, '../../front/front/uploads/5 Product Category Levels.jpg', '../../front/front/uploads/6 Define Product.jpg', '../../front/front/uploads/7 Create Customers.jpg', '../../front/front/uploads/20171221_232055[1].mp4', 9),
(7, 'C:xampp	mpphpFF3C.tmp', 'C:xampp	mpphpFF4C.tmp', 'C:xampp	mpphpFF4D.tmp', 'C:xampp	mpphpFF5E.tmp', 10),
(8, '69126797-oracle-wallpapers.jpeg', '39975690-oracle-wallpapers (1).png', '39975690-oracle-wallpapers.png', 'videoplayback.weba', 11),
(9, 'WIN_20171123_15_35_57_Pro.jpg', '69126797-oracle-wallpapers.jpeg', 'BA7Q3842 (Copy).JPG', '20171221_232055[1].mp4', 12);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `ID` int(11) NOT NULL,
  `description` int(100) NOT NULL,
  `filename` int(100) NOT NULL,
  `fileextension` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`ID`, `description`, `filename`, `fileextension`) VALUES
(1, 0, 0, 0),
(2, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cat`
--
ALTER TABLE `cat`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `house`
--
ALTER TABLE `house`
  ADD UNIQUE KEY `userid` (`userid`);

--
-- Indexes for table `house_upload`
--
ALTER TABLE `house_upload`
  ADD PRIMARY KEY (`house_id`),
  ADD UNIQUE KEY `sno` (`sno`),
  ADD KEY `book_upload_uid_fk` (`uid`),
  ADD KEY `book_upload_img_id_fk` (`img_id`),
  ADD KEY `book_upload_cat_id_fk` (`cat_id`);

--
-- Indexes for table `img_upload`
--
ALTER TABLE `img_upload`
  ADD PRIMARY KEY (`img_id`),
  ADD KEY `img_upload_uid_fk` (`uid`);

--
-- Indexes for table `paid_amount`
--
ALTER TABLE `paid_amount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userid` (`userid`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `service_request`
--
ALTER TABLE `service_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `society`
--
ALTER TABLE `society`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_attachment`
--
ALTER TABLE `user_attachment`
  ADD PRIMARY KEY (`ua_id`),
  ADD UNIQUE KEY `userid_un` (`userid`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `house_upload`
--
ALTER TABLE `house_upload`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `img_upload`
--
ALTER TABLE `img_upload`
  MODIFY `img_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `paid_amount`
--
ALTER TABLE `paid_amount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `service_request`
--
ALTER TABLE `service_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `society`
--
ALTER TABLE `society`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_attachment`
--
ALTER TABLE `user_attachment`
  MODIFY `ua_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
