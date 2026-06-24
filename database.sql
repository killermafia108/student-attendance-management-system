CREATE DATABASE attendance_system;

USE attendance_system;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    attendance_status VARCHAR(20) NOT NULL
);