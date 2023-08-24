
# Dynamic User Dashboard

This project aims to create a dynamic user dashboard having two sections: Profile and Connections.The frontend is built using Next.js and tailwind css while the backend is built using Node JS AND MongoDB.

![dashbaord](https://github.com/Mahikagarg09/Dashboard-user/assets/98404416/08a848c7-f624-4eb7-8f51-6a2359c5ac5f)

![connections](https://github.com/Mahikagarg09/Dashboard-user/assets/98404416/fedd523a-3604-43ef-8aaa-90eac310e581)



## Objective
The aim of this user dashboard is to create a web page where user can manage his user profile dynamically.They can register/log in ,
update their profile and connect with people.

## Technologies Used
- FrontEnd : Next.js , Tailwind CSS , Vercel(deployment)
- Backend  : Node JS , MongoDB , Render(deployment)

## Features

- User Authentication using 2 factor Authentication
- Editable User Profile
- Adding or Removing Connections
## FrontEnd Development

### Register and Login Process
The application provides a secure way of user authentication.
User can create account with his basic details and optionally provide details such as skills,experience etc. His account will be created after email verification. The passwords are encrypted and stored in a secure way.

### User Profile 
Profile of a user displays all the details such as his name,email,password,skills,experience ,education and certification.The user can update his information easily on clicking "edit" button.

### Connections 
The Connections page displays all the friends or user with whom the user have connected to or can connect to. The user can also remove connections from existing ones or add connections with people he can connect with.


## Backend Development

### API Endpoints
The backend provides API endpoints for:
- User authentication
- Fetching and updating user profiles
- Managing user connections

### MongoDB Integration
MongoDB is used for data storage and retrieval . User profiles and connections are stored and managed within the MongoDB database.

## Deployment

The project is deployed using:
- Frontend: Vercel
- Backend: Render

#### Project Deployed Link: [Live Site](https://user-dashboard-ten-rho.vercel.app/)

## Routes Used

- **Signup Page:** `/register`
- **Login Page:** `/`
- **User Profile Page:** `/user/profile`
- **User Connections Page:** `/user/connections`

## How to Setup

Clone this repository
```bash
  git clone https://github.com/Mahikagarg09/Dashboard-user

```
Navigate to the project directory
```bash
cd Dashboard-user
```

Install frontend dependencies
```bash
cd client && npm install
```
Install backend dependencies
```bash
cd server && npm install
```
Configure environment variables for MongoDB, other settings in backend's .env file and localhost for running backend server URL (usually http://localhost:5500).

Start the frontend development server
```bash
npm run dev
```
Start the backend development server
```bash
nodemon index.js
```
## Deployment Instructions

### Vercel Deployment
- Create an account on vercel
- Import your GitHub repository
- Choose your branch (usually main) and directory (client)
- Deploy

### Render Deployment
- Create an account on render
- Choose new Web Service
- Import your GiHub repository
- Choose your branch (usually main) and directory (api)
- Add environment variables
- Deploy

## Contributors 
[Mahika Garg](https://github.com/Mahikagarg09)
