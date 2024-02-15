# Running the Code Locally

To run this project on your local machine, follow these steps:

## Set up Environment Variables

- Create a `.env` file in both the `client` and `server` directories.

- Add the following variables to the `.env` file in the `client` directory:

    REACT_APP_BACKEND_URL= `http://localhost:PORT_VALUE`

    Replace `PORT_VALUE` with the port number you want to use for the backend server.

- Add the following variables to the `.env` file in the `server` directory:

    `FRONTEND_URL=`

    `PORT=`

    Give the port number you want to use for the backend server.
    When you get the frontend url after running the frontend code. Give that link to `FRONTEND_URL=`

## Clone the Repository

- Clone the repository to your local system using the following command:
    `git clone <repository_url>`

## Install Dependencies

- Navigate to the `client` directory in your terminal:  `cd client`

    Install dependencies for the client by running:   `npm install`

- Navigate to the `server` directory in your terminal:  `cd server`

    Install dependencies for the client by running:   `npm install`

## Run the Server

- In the `server` directory, set the `PORT` value in the `.env` file to the desired port number.

- Start the server by running:   `npm run start`

## Run the Client

- In the `client` directory, set the `REACT_APP_BACKEND_URL` value in the `.env` file to the URL of your backend server (e.g., `http://localhost:PORT_VALUE`).

- Start the React app by running:  `npm start`

when you get the frontend url pate that link to the FRONTEND_URL of server's .env file


## Added both the env file's screenshot
    
![env](/media/Screenshot%202024-02-15%20231955.png)

![env](/media/Screenshot%202024-02-15%20232100.png)

## Access the Application

Once the server and client are running, open your web browser and navigate to the URL provided by the React app. This will be your frontend localhost link.

# Project Overview

## Home Page
![Home Page](/media/Screenshot%202024-02-15%20232304.png)

## Chat UI
Clicking on the button will redirect you to the chat location. This is the UI of the chat:

![Chat UI](/media/Screenshot%202024-02-15%20232335.png)

Type a message and hit enter. You will see your message in the chat box.
![update UI](/media/Screenshot%202024-02-15%20232435.png)

## Real-Time Chat Functionality

Open two more browsers and type a message in the second browser, then hit enter. You will see the message in the first and third browsers as well.
![update UI](/media/Screenshot%202024-02-15%20232715.png)

Type a message in the third browser and hit enter. You will see the message in the first and second browsers as well.
![update UI](/media/Screenshot%202024-02-15%20232827.png)

## Message Overflow Handling

Type some random messages from all browsers. When the message box overflows, old messages automatically move upwards, and the scroll is fixed at the bottom. To view older messages, scroll up.

![Overflow Handling](/media/Screenshot%202024-02-15%20232921.png)

This README provides a guide to running the project locally and an overview of its functionality. 



