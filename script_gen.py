import subprocess
import re
import sys

# ====== CONFIG ======
OLLAMA_PATH = r"C:\Users\VP\AppData\Local\Programs\Ollama\ollama.exe"
MODEL = "deepseek-r1:8b"
INPUT_FILE = "translated.txt"
OUTPUT_FILE = "script.txt"       # Final cleaned script goes here
FINAL_OUTPUT = "script_final.txt"  # Raw Ollama output for debugging

# ====== Step 1: Read input ======
try:
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        description = f.read()
except FileNotFoundError:
    print(f"Error: {INPUT_FILE} not found!")
    sys.exit()

# ====== Step 2: Prepare prompt ======
prompt_text = f"""
You are a scriptwriter. Convert the following description into 5 concise scenes.
- Each scene should be ONE paragraph of about 3 sentences.
- Do NOT include any 'Thinking...' or internal commentary.
- Number the scenes using 'Scene 1:', 'Scene 2:', etc.

Description:
{description}
"""

# ====== Step 3: Run Ollama ======
command = [OLLAMA_PATH, "run", MODEL, prompt_text]

try:
    process = subprocess.Popen(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8"
    )
    stdout, stderr = process.communicate()
except FileNotFoundError:
    print("Error: Ollama executable not found. Check OLLAMA_PATH!")
    sys.exit()

if stderr:
    print("Warning/Error from Ollama:\n", stderr)

if not stdout:
    print("Error: No output from Ollama. Check your model and prompt.")
    sys.exit()

# ====== Step 4: Save raw Ollama output ======
with open(FINAL_OUTPUT, "w", encoding="utf-8") as f:
    f.write(stdout)
print(f"Raw script saved to {FINAL_OUTPUT}")

# ====== Step 5: Clean and split into scenes ======
cleaned_output = re.sub(r"Thinking.*?done thinking\.", "", stdout, flags=re.DOTALL)
paragraphs = [p.strip() for p in cleaned_output.split("\n\n") if p.strip()]
scenes = paragraphs[:5]

while len(scenes) < 5:
    scenes.append("Scene content not generated.")

scene_paragraphs = []
for scene in scenes:
    scene_text = re.sub(r"\s+", " ", scene)
    scene_text = re.sub(r"Scene\s*\d+:\s*", "", scene_text)  # remove "Scene X:"
    sentences = re.split(r"(?<=[.!?])\s+", scene_text)
    short_scene = " ".join(sentences[:3])
    scene_paragraphs.append(short_scene)

# ====== Step 6: Save cleaned final script ======
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    for para in scene_paragraphs:
        f.write(f"{para}\n")  # no Scene numbers, each scene new line
print(f"Final script saved to {OUTPUT_FILE}")

# ====== Step 7: Auto push to Git ======
try:
    subprocess.run(["git", "checkout", "video-backend"], check=True)
    subprocess.run(["git", "add", OUTPUT_FILE], check=True)
    subprocess.run(["git", "commit", "-m", "Update script.txt"], check=True)
    subprocess.run(["git", "push", "origin", "video-backend"], check=True)
    print("✅ script.txt pushed to video-backend branch.")
except subprocess.CalledProcessError as e:
    print("⚠️ Git operation failed:", e)
