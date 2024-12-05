#!/bin/bash

# Navigate to the project directory
cd /root/go_workspace/src/miviro

# Exit immediately if a command exits with a non-zero status
set -e

# Source environment variables
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Install Go dependencies
/usr/local/go/bin/go mod tidy

# Install npm dependencies
npm install

# Build Tailwind CSS
npm run build:css

# Build JavaScript assets (if using Vite)
npm run build:js

# Build the Go application
/usr/local/go/bin/go build -o miviro

# Start the Go server
./miviro > log.txt 2>&1
