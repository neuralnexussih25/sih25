from deep_translator import GoogleTranslator

# Read Tamil content
with open("contents.txt", "r", encoding="utf-8") as f:
    tamil_text = f.read().strip()

if not tamil_text:
    print("⚠️ contents.txt is empty! Please add some Tamil text.")
    exit()

# Split into lines (to ensure even small parts get translated)
lines = tamil_text.split("\n")

translations = []
for line in lines:
    if line.strip():
        try:
            translated = GoogleTranslator(source="ta", target="en").translate(line)
            print(f"🔹 Tamil: {line}")          # Debug original
            print(f"➡ English: {translated}")  # Debug translation
            translations.append(translated)
        except Exception as e:
            print(f"❌ Error translating line: {line}\n{e}")
            translations.append("")
    else:
        translations.append("")

# Save result
with open("translated_contents.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(translations))

print("\n✅ Translation complete! Check 'translated_contents.txt'")
