# React User Role Management

This repository contains a modern web application built with Vite, React, and TypeScript.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Local Development Setup](#local-development-setup)
3. [Testing](#testing)
4. [Production Deployment](#production-deployment)

### Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

To get started with this project, make sure you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env.local file in the root directory of your project and add the following line:

```bash
API_URL=http://localhost:3000
```

## Local Development Setup

To start the development server locally, run:

```bash
npm run dev
```

This command will spin up a development server using Vite and hot module replacement, allowing you to see your changes in real-time as you develop.

Open your browser and navigate to http://localhost:5173 to view the application.

## Testing

### Unit Tests

This project uses Jest as the testing framework for unit tests.

To run unit tests, use the following command:

```bash
npm run test
```

### End-to-End Tests

For end-to-end testing, this project uses Cypress.

To run end-to-end tests, use the following command:

```bash
npm run test:e2e
```

## Production Deployment

To build the application for production, use the following command:

```bash
npm run build
```

This command will generate an optimized build of your application in the dist directory.

You can then deploy this build to your hosting provider of choice.

## Serving the Production Build Locally

```bash
npm run serve
```

This will serve the production build of your application on http://localhost:5000.

## License

This project is licensed under the [MIT License](LICENSE).
