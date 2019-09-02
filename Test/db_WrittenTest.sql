--
-- Create Database: `db_WrittenTest`
--

DROP DATABASE IF EXISTS db_WrittenTest;
CREATE DATABASE IF NOT EXISTS db_WrittenTest;
USE db_WrittenTest;

-- --------------------------------------------------------

--
-- Table structure for table `Machine`
--

CREATE TABLE `Machine` (
  `id` int(11) DEFAULT NULL,
  `Name` text,
  `Enabled` tinyint(1) DEFAULT NULL,
  `Type` text
) ;
-- --------------------------------------------------------

--
-- Table structure for table `Job`
--

CREATE TABLE `Job` (
  `id` int(11) DEFAULT NULL,
  `Name` text
) ;
-- --------------------------------------------------------

--
-- Table structure for table `Task`
--

CREATE TABLE `Task` (
  `id` int(11) DEFAULT NULL,
  `Name` text,
  `Job_id` int(11) DEFAULT NULL,
  `Sequence` int(11) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `Task_queue`
--

CREATE TABLE `Task_queue` (
  `id` int(11) DEFAULT NULL,
  `machine_id` int(11) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `status` text
) ;
COMMIT;

