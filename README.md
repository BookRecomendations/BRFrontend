# Frontend for the Book Recommendation Application

Below are the steps to run the frontend using docker.

### Build the container
```bash
docker build . -t "br-frontend"
```

### Run the container
```bash
docker run -p 5173:5173 br-frontend
```

### Access the application
```
http://localhost:8080
```
