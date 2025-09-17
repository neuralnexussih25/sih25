import torch
from diffusers import StableDiffusionPipeline
import moviepy.editor as mp
from moviepy.video.tools.subtitles import SubtitlesClip
import numpy as np
import cv2
import os
import asyncio
import edge_tts  # <-- New for Copilot-like TTS

# Create necessary directories
os.makedirs("scenes", exist_ok=True)
os.makedirs("outputs", exist_ok=True)

# Device setup
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load Stable Diffusion (Realistic Vision)
pipe = StableDiffusionPipeline.from_pretrained(
    "SG161222/Realistic_Vision_V5.1_noVAE",
    torch_dtype=torch.float16 if device == "cuda" else torch.float32,
)
pipe = pipe.to(device)

# --- Copilot-style TTS using Edge-TTS ---
async def text_to_speech_async(text, filename):
    voice = "en-US-AriaNeural"  # Natural Copilot-like voice
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(filename)

def text_to_speech(text, filename):
    asyncio.run(text_to_speech_async(text, filename))

# --- Subtitles (movie style, smaller font, lower position) ---
def make_subtitle(text, duration, fontsize=24):
    generator = lambda txt: mp.TextClip(
        txt,
        font="Arial",
        fontsize=fontsize,
        color="white",
        stroke_color="black",
        stroke_width=1,
        size=(1280, None),
        method="caption",
    )
    return SubtitlesClip([((0, duration), text)], generator)

# --- Upscale image to 1280x720 ---
def upscale_image(img, target_size=(1280, 720)):
    return cv2.resize(img, target_size, interpolation=cv2.INTER_CUBIC)

# --- Generate video for one scene ---
def generate_scene_video(prompt, filename, num_images=3, height=360, width=640):
    # TTS
    audio_file = filename.replace(".mp4", ".mp3")
    text_to_speech(prompt, audio_file)
    audio_clip = mp.AudioFileClip(audio_file)
    audio_duration = audio_clip.duration

    # Duration per image
    duration_per_image = audio_duration / num_images

    # Generate images
    images = pipe(
        [prompt] * num_images,
        height=height,
        width=width,
        num_inference_steps=30
    ).images

    # Upscale
    frames = [upscale_image(np.array(img)) for img in images]

    # Clips
    clips = [mp.ImageClip(frame).set_duration(duration_per_image) for frame in frames]
    scene_clip = mp.concatenate_videoclips(clips).set_audio(audio_clip)

    # Subtitles (bottom, like movies)
    subtitles = make_subtitle(prompt, audio_duration)
    final = mp.CompositeVideoClip([
        scene_clip,
        subtitles.set_pos(("center", "bottom")).margin(bottom=50)
    ])

    final.write_videofile(filename, codec="libx264", fps=24)
    return filename

# --- MAIN ---
with open("script.txt", "r", encoding="utf-8") as f:
    scenes = [line.strip() for line in f if line.strip()]

scene_files = []
for idx, scene_text in enumerate(scenes):
    output_file = f"scenes/scene_{idx+1}.mp4"
    print(f" Generating scene {idx+1}: {scene_text}")
    generate_scene_video(scene_text, output_file)
    scene_files.append(output_file)

# Merge all
final_clip = mp.concatenate_videoclips([mp.VideoFileClip(f) for f in scene_files])
final_output = "outputs/final_video.mp4"
final_clip.write_videofile(final_output, codec="libx264", fps=24)

print(f"🎬 Full video saved at {final_output}")