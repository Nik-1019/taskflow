# TaskFlow backend container image.
# TODO: Priya Sharma — finalize base image, non-root user, multi-stage build,
# gunicorn/uvicorn worker config for ECS/Fargate.
FROM python:3.9-slim

WORKDIR /app

# TODO: Copy requirements and install dependencies (pinned in Sprint 1).
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Health-check entrypoint referenced by README + ECS target group.
# TODO: Replace with production gunicorn/uvicorn worker command.
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
