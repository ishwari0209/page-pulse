from bs4 import BeautifulSoup


def parse_html(html: str):
    soup = BeautifulSoup(html, "lxml")

    # Title
    title = soup.title.string.strip() if soup.title and soup.title.string else None

    # Meta Description
    meta = soup.find("meta", attrs={"name": "description"})
    meta_description = (
        meta.get("content").strip()
        if meta and meta.get("content")
        else None
    )

    # H1 Count
    h1_count = len(soup.find_all("h1"))

    # Images Missing Alt
    images = soup.find_all("img")
    missing_alt = sum(
        1 for img in images
        if not img.get("alt") or img.get("alt").strip() == ""
    )

    # Word Count
    for tag in soup(["script", "style"]):
        tag.decompose()

    text = soup.get_text(separator=" ")
    words = text.split()
    word_count = len(words)

    return {
        "title": title,
        "meta_description": meta_description,
        "h1_count": h1_count,
        "images_missing_alt": missing_alt,
        "word_count": word_count
    }