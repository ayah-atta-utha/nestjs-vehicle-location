-- `vehicle-location`.location_history definition

CREATE TABLE `location_history` (
  `vehicle_id` int DEFAULT NULL,
  `location` point DEFAULT NULL,
  `speed` float(10,6) NOT NULL DEFAULT '0.000000',
  `direction` float(10,6) NOT NULL,
  `timestamp` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `location_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`location_id`))
