import time
import requests

from fastapi import APIRouter, HTTPException
from app.models import AuditRequest
from app.parser import parse_html

router = APIRouter()


@router.post("/audit")
def audit_website(request: AuditRequest):

    try:
        start = time.perf_counter()

        response = requests.get(
            str(request.url),
            timeout=10,
            headers={
                "User-Agent": "Mozilla/5.0"
            }
        )

        response_time = round((time.perf_counter() - start) * 1000)

    except requests.exceptions.Timeout:
        raise HTTPException(status_code=408, detail="Request timed out")

    except requests.exceptions.RequestException:
        raise HTTPException(status_code=400, detail="Website unreachable")

    content_type = response.headers.get("Content-Type", "")

    if "text/html" not in content_type:
        raise HTTPException(
            status_code=400,
            detail="Only HTML pages are supported"
        )

    parsed = parse_html(response.text)

    return {
        "status": response.status_code,
        "response_time": response_time,
        **parsed
    }