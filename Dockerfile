# Use an official Python runtime as a parent image
FROM python:3.12.4-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Python dependencies
RUN pip install --no-cache-dir -r python-streamlit/requirements.txt

# Install Node.js dependencies
WORKDIR /app/react-app
RUN npm install

# Expose the port Streamlit will run on and the port for React (assuming React runs on 3000)
EXPOSE 8501
EXPOSE 3000

# Use a script to start both Streamlit and React
WORKDIR /app
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

CMD ["./start.sh"]