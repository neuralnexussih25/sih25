import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

export default function ManuscriptScanner() {
  const webcamRef = useRef(null);
  const [scannedImage, setScannedImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  // Capture image from webcam
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setScannedImage(imageSrc);
    handleOCR(imageSrc);
  };

  // Perform OCR on captured image
  const handleOCR = (image) => {
    setLoading(true);
    setExtractedText(""); // reset before new scan

    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m), // logs progress
    })
      .then(({ data: { text } }) => {
        setExtractedText(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-heritagePattern bg-cover bg-fixed text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-heritageGold mb-6">
        Manuscript Scanner
      </h1>

      {/* Webcam Preview */}
      {!scannedImage && (
        <div className="rounded-lg shadow-lg overflow-hidden border-4 border-heritageGold">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            className="w-[350px] md:w-[500px] h-[250px] md:h-[350px] object-cover"
          />
        </div>
      )}

      {/* Scan & Retake Buttons */}
      <div className="mt-6 flex gap-4">
        {!scannedImage ? (
          <button
            onClick={capture}
            className="bg-heritageGold text-deepMaroon px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Scan Manuscript
          </button>
        ) : (
          <button
            onClick={() => {
              setScannedImage(null);
              setExtractedText("");
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition"
          >
            Retake
          </button>
        )}
      </div>

      {/* Captured Image */}
      {scannedImage && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-heritageGold mb-2">
            Captured Image:
          </h2>
          <img
            src={scannedImage}
            alt="Scanned Manuscript"
            className="max-w-md rounded-lg shadow-lg border border-heritageGold"
          />
        </div>
      )}

      {/* Extracted Text */}
      <div className="mt-10 max-w-3xl w-full">
        <h2 className="text-xl font-semibold text-heritageGold mb-2">
          Extracted Text:
        </h2>
        {loading ? (
          <p className="text-yellow-300 animate-pulse">Processing OCR...</p>
        ) : (
          <p className="bg-black/50 p-4 rounded-lg whitespace-pre-line text-left">
            {extractedText || "No text extracted yet."}
          </p>
        )}
      </div>
    </div>
  );
}
