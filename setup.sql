-- Run this when you are running SQL Docker for the first time
CREATE DATABASE IF NOT EXISTS `APIProxy` /*!40100 DEFAULT CHARACTER SET armscii8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `APIProxy`;

-- Dumping structure for table APIProxy.Log
CREATE TABLE IF NOT EXISTS `Log` (
  `LogId` int NOT NULL AUTO_INCREMENT,
  `method` varchar(5) DEFAULT NULL,
  `hostname` varchar(50) DEFAULT NULL,
  `sourceIP` varchar(50) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `headers` json DEFAULT NULL,
  `queryParams` json DEFAULT NULL,
  `body` json DEFAULT NULL,
  PRIMARY KEY (`LogId`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=armscii8;

-- Data exporting was unselected.

-- Dumping structure for table APIProxy.Proxy
CREATE TABLE IF NOT EXISTS `Proxy` (
  `proxyId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `proxyUrl` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `proxyIp` varchar(20) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `proxyPort` int NOT NULL DEFAULT '80',
  `isService` varchar(1) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`proxyId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=armscii8;
