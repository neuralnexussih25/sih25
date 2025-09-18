import pytesseract
from PIL import Image, ImageFilter, ImageOps
import unicodedata
import re
import os

# -------- CONFIG --------
# Set your image path directly here
IMAGE_PATH = r"C:\Users\rtham\classical_tamil_analyzer\test.jpg"
OUTPUT_FILE = "contents.txt"
LANG_CODE = "tam"  # Tamil language code

# -------- IMAGE PREPROCESSING --------
if not os.path.exists(IMAGE_PATH):
    raise FileNotFoundError(f"Image not found: {IMAGE_PATH}")

img = Image.open(IMAGE_PATH)

# Convert to grayscale
img = ImageOps.grayscale(img)

# Sharpen to improve text clarity
img = img.filter(ImageFilter.SHARPEN)

# Binarize (black and white)
img = img.point(lambda x: 0 if x < 140 else 255, '1')

# -------- OCR EXTRACTION --------
custom_config = r'--oem 3 --psm 6'
tamil_text = pytesseract.image_to_string(img, lang=LANG_CODE, config=custom_config)

# Normalize text
clean_text = unicodedata.normalize("NFC", tamil_text)

# Keep only Tamil characters and spaces
filtered_text = "".join(
    c if re.match(r'[\u0B80-\u0BFF\s]', c) else " "
    for c in clean_text
)

# Collapse multiple spaces into one line
single_line_text = " ".join(filtered_text.split())

# -------- SAVE TO FILE --------
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(single_line_text)

print(f"OCR completed. Text saved to {OUTPUT_FILE}")
