# TaskFlow Backend

FastAPI service for the TaskFlow AI-powered project management platform.

## Ownership
- **Javier Lopez** — API endpoints, authentication, business logic.
- **Marco Rossi** — data models, ETL pipelines, AI/OpenAI integration.

## Layout
- `app/` — application package (entry point `app/main.py`, `uvicorn app.main:app`).
- `app/main.py` — FastAPI app with a `/health` liveness probe (scaffold only).
- `migrations/` — Alembic database migrations.
- `requirements.txt` / `pyproject.toml` — dependencies and tooling config (Black, Flake8, MyPy).
- `Dockerfile` — container image stub for ECS/Fargate.
- `.env.example` — environment template (copy to `.env`, never commit secrets).

## Run (skeleton)
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
# GET /health -> {"status":"ok"}
```

## What goes here (Sprint 1+)
- RESTful routers: auth, tasks, projects, notifications.
- Pydantic schemas, SQLAlchemy async models, Alembic migrations.
- JWT auth + RBAC, Celery background tasks, Redis caching.
- OpenAI GPT-4 integration (env-keyed, mocked in dev).

> This directory is a **scaffold**. No business logic, auth, models, or endpoints
> (beyond `/health`) are implemented yet.
