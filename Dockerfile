# Stage 1: Python Streamlit application
FROM python:3.9-slim as python-streamlit

# Set working directory
WORKDIR /app/python-streamlit

# Copy python-streamlit directory contents into the container
COPY python-streamlit/ .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install streamlit

# Command to run the Streamlit app
CMD ["streamlit", "run", "results.py"]

# Stage 2: React application
FROM node:14-alpine as react-app

# Set working directory
WORKDIR /app/react-app

# Copy react-app directory contents into the container
COPY react-app/ .

# Install npm dependencies
RUN npm install

# Command to run the React app
CMD ["npm", "start"]

# Final Stage: Combine both stages
FROM node:14-alpine

# Copy both applications into the final container
COPY --from=python-streamlit /app/python-streamlit /app/python-streamlit
COPY --from=react-app /app/react-app /app/react-app

# Command to run both applications simultaneously
CMD ["sh", "-c", "cd /app/python-streamlit && streamlit run results.py & cd /app/react-app && npm start"]
