from deep_translator import GoogleTranslator
import re

# --- Step 1: File paths ---
input_path = r"C:\Users\atsak\OneDrive\Desktop\contents.txt"
output_path = r"C:\Users\atsak\OneDrive\Desktop\translated_contents.txt"

# --- Step 2: Read Tamil text ---
with open(input_path, "r", encoding="utf-8") as f:
    tamil_text = f.read().strip()

print("📌 Raw OCR Tamil Text:\n", tamil_text)

# --- Step 3: Clean unwanted junk ---
# Remove hidden Unicode (ZWJ, ZWNJ, BOM, etc.)
tamil_text_clean = re.sub(r'[\u200c\u200d\uFEFF]', '', tamil_text)

# Remove repeated filler patterns like "ல் ல் ல் ல்"
tamil_text_clean = re.sub(r'(.)\1{2,}', r'\1', tamil_text_clean)

# Remove stray Latin characters / garbage OCR outputs
tamil_text_clean = re.sub(r'[A-Za-z]+', '', tamil_text_clean)

print("\n✅ Clean Tamil Text:\n", tamil_text_clean)

# --- Step 4: Translate Tamil → English ---
if tamil_text_clean:
    try:
        english_text = GoogleTranslator(source='ta', target='en').translate(tamil_text_clean)
    except Exception as e:
        english_text = f"⚠ Translation failed: {e}"
else:
    english_text = "⚠ No valid Tamil text found."

# --- Step 5: Save output ---
with open(output_path, "w", encoding="utf-8") as f:
    f.write("✅ Tamil Text (cleaned from file):\n")
    f.write(tamil_text_clean + "\n\n")
    f.write("🌍 English Translation:\n")
    f.write(english_text + "\n")

print("\n🌍 English Translation:\n", english_text)
print(f"\n✅ Translation saved in: {output_path}")
