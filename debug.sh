#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the project directory
cd "$(dirname "$0")"

# Install Go dependencies
echo "Installing Go dependencies..."
go mod tidy

# Install npm dependencies (if necessary)
echo "Installing npm dependencies..."
npm install

# Build Tailwind CSS
echo "Building Tailwind CSS..."
npm run build:css

# Run Air for live reloading
echo "Starting Air for live reloading..."
/root/go/bin/air
