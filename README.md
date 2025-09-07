# Node-ci-demo

A simple Node.js project to demonstrate CI/CD with GitHub Actions, Docker, and AWS.

## Installation

To install the dependencies, run:

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

**Note:** The tests are not fully implemented yet. The test script is a placeholder.

## Docker

This project can be containerized using Docker.

### Build the Docker Image

To build the Docker image, run the following command in the project's root directory:

```bash
docker build -t ci-demo .
```

### Run the Docker Container

To run the Docker container, use the following command:

```bash
docker run -p 3000:3000 ci-demo
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
