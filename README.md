# DilonChatbot

**DilonChatbot** is a powerful conversational chatbot powered by Mistral AI. It is built using modern technologies like Next.js, React, and Tailwind CSS to provide real-time, efficient conversational interactions.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

DilonChatbot provides an intelligent chat interface that allows users to communicate with the chatbot, powered by Mistral AI, for a seamless conversational experience. It's designed with efficiency, scalability, and ease of use in mind.

## Features

- **Real-time Chat**: Interact with the chatbot in real time.
- **Powered by Mistral AI**: Utilizes advanced AI for conversational understanding.
- **Responsive UI**: Built with Tailwind CSS for a sleek and responsive interface.
- **Customizable**: Easily modify and expand the chatbot’s functionality.

## Tech Stack

- **Next.js**: Framework for building the user interface.
- **React**: JavaScript library for creating dynamic UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations.
- **Mistral AI**: Backend API for generating chatbot responses.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Konstantilieris/DilonChatbot.gitNavigate to the project directory:

bash
Copy code
cd DilonChatbot
Install the dependencies:

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Set up environment variables:

Create a .env.local file in the root directory and add your Mistral API key:

bash
Copy code
NEXT_PUBLIC_MISTRAL_API_KEY=your-mistral-api-key
Usage
To start the development server, run the following command:

bash
Copy code
npm run dev
or

bash
Copy code
yarn dev
This will start the application locally at http://localhost:3000.

Interacting with the Chatbot
Once the application is running, you can type a query into the input field, and the chatbot will respond with a message powered by Mistral AI.

Testing
You can run unit tests and integration tests to ensure everything is working as expected.

Run Unit Tests:

bash
Copy code
npm test
or

bash
Copy code
yarn test
Run End-to-End Tests (if configured with a tool like Cypress):

bash
Copy code
npm run e2e
Environment Variables
The project requires the following environment variables to run properly. Make sure to set these in your .env.local file.

NEXT_PUBLIC_MISTRAL_API_KEY: Your API key for Mistral AI.
For example, your .env.local file should look like this:

bash
Copy code
NEXT_PUBLIC_MISTRAL_API_KEY=your-api-key
Contributing
We welcome contributions! Follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

bash
Copy code
git checkout -b feature-name
Commit your changes with a descriptive message:

bash
Copy code
git commit -m "Added new feature"
Push your branch to GitHub:

bash
Copy code
git push origin feature-name
Open a pull request with a description of your changes.










