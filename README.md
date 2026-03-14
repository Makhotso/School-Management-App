## Table of Contents
1.	Project Overview
2.	Architecture
3.	Screenshots
4.	Features
5.	Technology Stack
6.	Setup Instructions
7.	Docker Instructions
8.	Future Enhancements
9.	License

## Project Overview

 The School Management App is a full-stack web application designed to manage core school operations such as learners, teachers, grades, and assignments.

 This system allows administrators and teachers to manage academic data efficiently through a modern web interface connected to a RESTful backend.

## Architecture 

Description:
•	Frontend communicates via REST APIs with the backend
•	Backend interacts with PostgreSQL for persistent storage
•	Apache Kafka handles event-driven communication (e.g., assignment notifications)

## Screenshots

<img width="1187" height="468" alt="Home Interface" src="https://github.com/user-attachments/assets/8a8a3307-e75c-45b6-95fd-53b31767c0f7" />

## Fetaures 

## Technologies Used Backend

-Java 17

-Spring Boot

-Spring Web

-Spring Data JPA

-Hibernate

-Maven

-PostgreSQL

## Frontend

-React

-Axios (for API calls)

-HTML5

-CSS3

-JavaScript

## Tools

-IntelliJ IDEA

-Git & GitHub

-Postman (API testing)



## Technology Stack Description:

## Frontend

-Built with React

-Handles UI and user interaction

-Communicates with backend via REST APIs

## Backend

-Built with Spring Boot

-Uses Maven for dependency management

-Exposes RESTful APIs

-Connects to PostgreSQL database

- Uses Apache Kafka for asynchronous messaging between services

## Database

-PostgreSQL

Stores learners, teachers, grades, assignments

## Setup Instructions

1.	Clone the repository https://github.com/Makhotso/School-Management-App.git
cd school-management-system
2.	Frontend setup
cd client
npm install
npm start
Access the app at: http://localhost:3000
3.	Backend setup
cd server
mvn clean install
mvn spring-boot:run
Access the backend API at: http://localhost:8080
4.	Database setup
•	Install PostgreSQL
•	Create a database school_db
•	Update application.properties with your database credentials
5.	Kafka setup
•	Install Apache Kafka
•	Start Zookeeper and Kafka server
•	Update Spring Boot properties to point to Kafka brokers

## Docker Instructions

1.	Build Docker images
docker build -t school-backend ./server
docker build -t school-frontend ./client
2.	Run containers
docker run -p 8080:8080 school-backend
docker run -p 3000:3000 school-frontend
3.	Run Kafka with Docker Compose
version: '3.1.3'
services:
  zookeeper:
    image: wurstmeister/zookeeper:3.4.6
    ports:
      - "2181:2181"
  kafka:
    image: wurstmeister/kafka:2.12-2.2.1
    ports:
      - "9092:9092"
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092

## Core Entities

The system currently supports:

-Teacher

-Learner

-Grade

-Assignment

## Future enhancements:

•	Implement authentication & authorization with JWT
•	Assignment submission system for learners
•	Teacher feedback and notifications
•	Cloud deployment (AWS / Azure)
•	Analytics dashboard with charts for admins and teachers

