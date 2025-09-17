import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import demoVideo from "../assets/demo.mp4";

// Manuscripts images
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

// Scanner component
import ManuscriptScanner from "../components/ManuscriptScanner";

export default function Upload() {
  const places = [img11, img12, img13, img14, img15, img16, img17, img18, img19];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [openScanner, setOpenScanner] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // ESC key to close scanner modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setOpenScanner(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select a file first!");
    console.log("Uploading file:", selectedFile);
    alert(`File "${selectedFile.name}" uploaded successfully!`);
    // Add your upload logic here
  };

  return (
    <div className="min-h-screen text-parchment font-serif overflow-x-hidden relative">
      {/* Upload Manuscript Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-500">
          Contribute Your Manuscript
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-base text-white bg-gray-700/70 p-4 rounded">
          Help us preserve our heritage by either uploading your manuscript file or scanning it directly using your device.
        </p>

        {/* Upload + Scan Options */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Upload Box */}
          <div className="bg-black/30 p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Upload File</h3>
            <input
              type="file"
              accept=".pdf,.jpg,.png,.docx"
              className="mb-4 block w-full text-sm text-gray-200
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border file:border-yellow-400
              file:text-sm file:font-medium
              file:bg-transparent file:text-white
              hover:file:bg-yellow-500 hover:file:text-black transition-colors"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <p className="text-gray-300 mb-2 text-sm truncate">
                Selected: {selectedFile.name}
              </p>
            )}
            <button
              type="button"
              onClick={handleUpload}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Upload
            </button>
          </div>

          {/* Scan Manuscript Box */}
          <div className="bg-black/30 p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Scan Manuscript</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Use your device camera to scan manuscripts directly.
            </p>
            <button
              onClick={() => setOpenScanner(true)}
              className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition font-medium"
            >
              Start Scanning
            </button>
          </div>
        </div>

        {/* Scanner Modal */}
        {openScanner && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={(e) => e.target === e.currentTarget && setOpenScanner(false)}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full border-4 border-yellow-500 transform scale-95 animate-scaleUp">
              <button
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                onClick={() => setOpenScanner(false)}
              >
                Exit
              </button>
              <ManuscriptScanner />
            </div>
          </div>
        )}
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-600">
          Featured Storytelling Video
        </h2>
        <video
          controls
          className="mx-auto rounded-lg shadow-lg max-w-4xl bg-black/30"
          src={demoVideo}
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Manuscripts Carousel */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-600">
          Manuscripts Found Places
        </h2>
        <div className="max-w-6xl mx-auto relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            {places.map((place, i) => (
              <SwiperSlide
                key={i}
                className="w-[300px] h-[400px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setCurrentImg(place);
                  setIsOpen(true);
                }}
              >
                <img
                  src={place}
                  alt={`Place ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Lightbox */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
            >
              <button
                className="absolute top-5 right-5 text-white text-3xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <img
                src={currentImg}
                alt="Enlarged"
                className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 mt-8 bg-black/30 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Neural Nexus</h3>
            <p className="text-sm leading-relaxed">
              Preserving heritage manuscripts through AI-powered storytelling.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-yellow-400">Showcase</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-yellow-400">Facebook</a>
              <a href="#" className="hover:text-yellow-400">Twitter</a>
              <a href="#" className="hover:text-yellow-400">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-4">&copy; 2025 Neural Nexus. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
