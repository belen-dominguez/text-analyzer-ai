#!/bin/bash

echo "Levantando backend..."
uv run uvicorn backend.main:app --reload &

echo "Levantando frontend..."
cd frontend && python3 -m http.server 8080 &

echo "✅ Todo corriendo!"
echo "Backend: http://localhost:8000"
echo "Frontend: http://localhost:8080"

wait