from fastapi import fastAPI
from routes import router
app = FastAPI()
app.include_router()