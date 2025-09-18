from PIL import Image, ImageOps, ImageFilter
import pytesseract, unicodedata, re, io

def run_ocr(image_bytes):
    img = Image.open(io.BytesIO(image_bytes))
    img = ImageOps.grayscale(img)
    img = img.filter(ImageFilter.SHARPEN)
    img = img.point(lambda x: 0 if x < 140 else 255, '1')

    text = pytesseract.image_to_string(img, lang="tam", config="--oem 3 --psm 6")
    text = unicodedata.normalize("NFC", text)
    filtered = "".join(c if re.match(r'[\u0B80-\u0BFF\s]', c) else " " for c in text)
    return " ".join(filtered.split())
