# Use the official Node.js image as a base
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to install dependencies
COPY package*.json ./

# Install the project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Use Nginx as the web server to serve the built app
FROM nginx:alpine

# Copy the build folder from the previous image
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the app in the container
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
