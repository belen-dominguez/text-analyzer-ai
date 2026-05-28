# 🧠 Text Analyzer AI

Una aplicación web que usa inteligencia artificial para analizar texto. Podés resumir, mejorar la redacción o clasificar cualquier texto en segundos — sin necesidad de conocimientos técnicos.

---

## ¿Qué puede hacer?

| Acción            | Descripción                                                     |
| ----------------- | --------------------------------------------------------------- |
| 📝 **Resumir**    | Genera un resumen claro y conciso manteniendo los puntos clave  |
| ✨ **Mejorar**    | Mejora la redacción y claridad del texto sin cambiar su esencia |
| 🏷️ **Clasificar** | Identifica el tono, la temática principal y el idioma del texto |

---

## Stack tecnológico

- **Backend:** Python + FastAPI
- **Frontend:** HTML + CSS + JavaScript
- **IA:** OpenAI API (`gpt-4o-mini`)
- **Servidor de desarrollo:** Uvicorn + Python HTTP Server

---

## Estructura del proyecto

```plaintext
text-analyzer-ai/
├── backend/
│   ├── agents/
│   │   ├── __init__.py
│   │   └── analyzer.py       # Lógica principal del agente
│   ├── models/
│   │   ├── __init__.py
│   │   └── requests.py       # Modelos Pydantic
│   ├── prompts/
│   │   ├── __init__.py
│   │   └── templates.py      # Prompts por acción
│   ├── routes/
│   │   ├── __init__.py
│   │   └── analyzer.py       # Endpoints FastAPI
│   ├── shared/
│   │   ├── __init__.py
│   │   ├── config_loader.py  # Carga de configuración YAML
│   │   └── logger.py         # Logger centralizado
│   ├── utils/
│   │   ├── __init__.py
│   │   └── llm_client.py     # Cliente OpenAI reutilizable
│   ├── config.yaml           # Configuración del modelo
│   └── main.py               # Entry point FastAPI
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .env                      # Variables de entorno (no se sube a Git)
├── .gitignore
├── run.sh                    # Script para levantar todo
└── README.md
```

---

## Requisitos

- Python 3.13+
- [uv](https://github.com/astral-sh/uv) (gestor de paquetes)
- Una API key de [OpenAI](https://platform.openai.com/)

---

## Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/text-analyzer-ai.git
cd text-analyzer-ai
```

### 2. Configurar variables de entorno

Creá un archivo `.env` en la raíz del proyecto:

```
OPENAI_API_KEY=tu_api_key_aqui
```

### 3. Instalar dependencias

```bash
uv sync
```

### 4. Levantar el proyecto

```bash
chmod +x run.sh   # solo la primera vez
./run.sh
```

Esto levanta el backend y el frontend en paralelo:

- **Backend:** http://localhost:8000
- **Frontend:** http://localhost:8080
- **Documentación API:** http://localhost:8000/docs

---

## Uso

1. Abrí http://localhost:8080 en el browser
2. Pegá el texto que querés analizar
3. Seleccioná una acción (Resumir, Mejorar o Clasificar)
4. Hacé click en **Analizar** y esperá la respuesta

---

## API

El backend expone un único endpoint:

### `POST /analizar`

**Body:**

```json
{
  "text": "El texto que querés analizar",
  "action": "summarize"
}
```

**Acciones disponibles:** `summarize` | `improve` | `classify`

**Respuesta:**

```json
{
  "summarize": "El resumen generado por la IA..."
}
```

Podés probar el endpoint directamente desde la documentación interactiva en http://localhost:8000/docs
