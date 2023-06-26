CREATE TABLE `posts` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`message` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`response_to` int,
	`repost_of` int);
