from openai import OpenAI
from backend.prompts.templates import PROMPTS
from backend.shared.logger import get_logger
from backend.utils.llm_client import generate_response

log = get_logger("analyzer")

class Analyzer:
    def __init__(self):
        self.client = OpenAI()

    def analyze(self, text: str, action: str):
        log.info(f"Analyzer started with action: {action}")

        prompt = PROMPTS.get(action)
        if not prompt:
            log.error(f"Unknown action: {action}")
            return {"error": f"Unknown action: {action}"}

        try:
            data = {
                "system_prompt": prompt,
                "user_prompt": text
            }

            response = generate_response(self.client, data)
            return {action: response["text"]}

        except Exception as e:
            log.error(f"Error during {action}: {e}")
            raise
