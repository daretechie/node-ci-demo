# Node-ci-demo

A simple Node.js project to demonstrate ### Build the Docker Image

To build the Docker image locally, run the following command in the project's root directory:

```bash
docker build -t node-ci-demo .
```

### Run the Docker Container

To run the Docker container locally, use the following command:

````bash
docker run -d -p 3000:3000 --name node-ci-demo node-ci-demo
```ub Actions, Docker, and AWS.

## Prerequisites

- Node.js version 20.0.0 or higher
- Docker (for containerization)

## Installation

First, ensure you have the correct Node.js version installed. You can check your version with:

```bash
node --version
````

Then install the dependencies by running:

```bash
npm install
```

## Running the Application

To start the application, run:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Running Tests

To run the tests, use:

```bash
npm test
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline:

1. Runs on Node.js 20.x and 21.x
2. Installs dependencies
3. Runs linting checks
4. Executes tests
5. Builds and pushes Docker image
6. Deploys to AWS EC2

## Docker

This project can be containerized using Docker.

### Build the Docker Image

To build the Docker image locally, run the following command in the project's root directory:

```bash
docker build -t node-ci-demo:latest .
```

### Run the Docker Container

To run the Docker container locally, use the following command:

```bash
docker run -d -p 3000:3000 --name node-ci-demo node-ci-demo:latest
```

To stop and remove the container (if you need to rebuild and run again):

```bash
docker stop node-ci-demo
docker rm node-ci-demo
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## CI/CD

This project is configured with a CI/CD pipeline using GitHub Actions. The workflow is defined in `.github/workflows/node.yml`.

The pipeline includes the following jobs:

- **build**: Installs dependencies and runs tests for different Node.js versions.
- **deploy**: Deploys the application to an AWS EC2 instance using Docker.

The deployment process involves:

1.  Connecting to the EC2 instance via SSH.
2.  Stopping and removing any existing Docker containers.
3.  Pulling the latest code from the GitHub repository.
4.  Building a new Docker image.
5.  Running a new Docker container with the updated image.
