"""Alembic migration environment.

TODO: Javier Lopez — load DB URL from app settings, import SQLA metadata from
app.models.base, and configure async engine + offline/online migration runners.
"""
from alembic import context

# TODO: Import target_metadata from app models once defined.
target_metadata = None

def run_migrations_offline() -> None:
    # TODO: url = settings.DATABASE_URL
    context.configure(url="", target_metadata=target_metadata, literal_binds=True)
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    # TODO: connectable = create_async_engine(settings.DATABASE_URL)
    with context.begin_transaction():
        context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
