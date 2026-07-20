"""TaskFlow backend application entry point.

TODO: Javier Lopez — build out the FastAPI app: routers (auth, tasks, projects),
middleware, dependency injection, CORS, JWT auth, and database session wiring.
This skeleton only exposes a health-check route so the service can boot.
"""
from fastapi import FastAPI

app = FastAPI(
    title="TaskFlow API",
    description="AI-powered project management platform — backend API.",
    version="0.1.0",
)

# TODO: Register API routers here (e.g. app.include_router(auth.router)).
# TODO: Add CORS middleware, JWT auth dependencies, and DB session middleware.


@app.get("/health", tags=["health"])
def health_check() -> dict:
    """Liveness probe used by ECS/Fargate health checks and CI smoke tests."""
    return {"status": "ok"}


# TODO: Add a /ready endpoint for readiness checks (DB/Redis connectivity) in Sprint 1.
