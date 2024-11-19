# Stage 1: Build stage
FROM node:18-alpine AS builder

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (uncomment if you have a build step)
# RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Stage 2: Production stage
FROM node:18-alpine

# Set NODE_ENV using the recommended key=value format
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Copy built node modules and application files
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/. .

# Expose the port the app runs on
EXPOSE 3000

# Use non-root user for better security
USER node

# Command to run the application
CMD ["npm", "start"]