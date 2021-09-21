-- Run this when you are running SQL Docker for the first time
CREATE DATABASE IF NOT EXISTS `APIProxy` /*!40100 DEFAULT CHARACTER SET armscii8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `APIProxy`;

-- Dumping structure for table APIProxy.Log
CREATE TABLE IF NOT EXISTS `Log` (
  `LogId` int NOT NULL AUTO_INCREMENT,
  `sourceIP` varchar(50) DEFAULT NULL,
  `destinationIP` varchar(50) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `headers` json DEFAULT NULL,
  `body` json DEFAULT NULL,
  PRIMARY KEY (`LogId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=armscii8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
