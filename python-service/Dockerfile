# Dockerfile for Python Service
FROM python:3.9-alpine

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./

EXPOSE 5000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5000"]
