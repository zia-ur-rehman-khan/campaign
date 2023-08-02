# Use the official Node.js 19.x base image
FROM node:19

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the desired port (replace 3000 with your application's port if needed)
EXPOSE 3000

# Set any required environment variables
# ENV NODE_ENV=production

# Start the application
ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["run-dev"]