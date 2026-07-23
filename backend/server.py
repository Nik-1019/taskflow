# Minimal TaskFlow HTTP server (stdlib only)
# Run with: python backend/server.py
# Serves GET /tasks -> JSON array of sample tasks on http://localhost:8000

from http.server import BaseHTTPRequestHandler, HTTPServer
import json

TASKS = [
    {"id": 1, "title": "Set up FastAPI project scaffold", "status": "in_progress"},
    {"id": 2, "title": "Define User and Task database models", "status": "todo"},
    {"id": 3, "title": "Implement JWT authentication endpoints", "status": "todo"},
    {"id": 4, "title": "Create Task CRUD endpoints", "status": "todo"},
]

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/tasks":
            body = json.dumps(TASKS).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):  # silence default request logging  # noqa: A002
        pass

if __name__ == "__main__":
    print("TaskFlow API running on http://localhost:8000")
    HTTPServer(("", 8000), Handler).serve_forever()
