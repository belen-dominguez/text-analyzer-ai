from pydantic import BaseModel, Field

class AnalyzeRequest(BaseModel):
    text: str = Field(..., description="El texto a analizar")
    action: str = Field(..., description="La acción a realizar sobre el texto (resumir, mejorar, clasificar)")