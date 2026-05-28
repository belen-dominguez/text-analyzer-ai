from backend.models.requests import AnalyzeRequest
from backend.agents.analyzer import Analyzer
from fastapi import APIRouter

router = APIRouter()

@router.post("/analizar")
def analizar(request: AnalyzeRequest):

    analyzer = Analyzer()
    result = analyzer.analyze(request.text, request.action)
    return result