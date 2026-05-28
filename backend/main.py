from fastapi import FastAPI
from backend.routes.analyzer import router
from shared.logger import get_logger
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()
app.include_router(router)

logger = get_logger(__name__)