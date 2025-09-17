import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function About() {
  return (
    <div className="font-serif text-parchment min-h-screen relative overflow-x-hidden bg-heritagePattern bg-cover bg-fixed">
      
      {/* Hero Section */}
      <section className="relative w-full h-96 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-heritageGold">
          About Neural Nexus
        </h1>
        <p className="relative text-lg md:text-2xl max-w-2xl animate-fadeIn delay-200 text-white bg-black/50 p-3 rounded">
          Preserving the beauty and wisdom of heritage manuscripts through AI-powered storytelling.
        </p>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeIn text-heritageGold">
          The Legacy of Manuscripts
        </h2>
        <p className="max-w-4xl mx-auto mb-8 text-lg leading-relaxed animate-fadeIn delay-200 text-white bg-black/50 p-4 rounded">
          Ancient manuscripts are portals to our past, revealing insights about culture, knowledge, and tradition. Neural Nexus bridges centuries of heritage with modern technology to make these treasures accessible and immersive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {img: img1, title: "Preserving Knowledge", desc: "Each manuscript is carefully digitized, preserving centuries of wisdom for future generations."},
            {img: img2, title: "Cultural Heritage", desc: "Our system celebrates cultural diversity, highlighting unique scripts, illustrations, and storytelling methods."},
            {img: img3, title: "AI Empowered", desc: "AI translates and transforms manuscripts into visually engaging stories, combining modern narration with historical imagery."}
          ].map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 animate-fadeIn">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-black/50 text-white">
                <h3 className="font-bold text-xl mb-2 text-heritageGold">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fadeIn text-heritageGold">Our Mission</h2>
        <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed animate-fadeIn delay-100 text-white bg-black/50 p-4 rounded">
          Neural Nexus aims to make heritage manuscripts accessible to everyone. Through digital transformation, storytelling, and AI-generated visualization, we bring history to life in an immersive and educational experience.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
          {[
            {title: "Explore Culture", desc: "Discover the diverse traditions, scripts, and illustrations embedded in ancient texts."},
            {title: "Learn History", desc: "Gain insights into the lives, philosophies, and wisdom of past generations through preserved manuscripts."},
            {title: "Embrace Innovation", desc: "Experience how AI, translation, and visual storytelling can rejuvenate ancient texts for modern audiences."}
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 bg-black/50 text-white animate-fadeIn">
              <h3 className="font-bold text-xl mb-2 text-heritageGold">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
     {/* Team Section */}
<section className="py-16 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeIn text-heritageGold">
    Meet the Team
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {[
      {name: "Balakumar V", role: "Frontend Developer – Builds interactive UI components and ensures responsive design."},
      {name: "Sakthiroopa A T", role: "OCR Specialist – Extracts text from ancient manuscripts using Tesseract and OpenCV."},
      {name: "Thamarai Manalan R", role: "AI Translator – Converts classical scripts into modern language while preserving meaning."},
      {name: "Shobika P", role: "Script Generator – Condenses manuscripts into scene-based narratives for storytelling."},
      {name: "Vasantharaj M", role: "Video Generator – Creates visual storytelling content from scripts."},
      {name: "Selvasobika M", role: "OCR Converter – Processes scanned documents into editable digital formats."}
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 bg-black/50 text-white animate-fadeIn"
      >
        <h3 className="font-bold text-xl mb-2 text-heritageGold">{item.name}</h3>
        <p className="text-sm leading-relaxed">{item.role}</p>
      </div>
    ))}
  </div>
</section>


      {/* Vision & Philosophy Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fadeIn text-heritageGold">Vision & Philosophy</h2>
        <p className="max-w-5xl mx-auto mb-12 text-lg leading-relaxed animate-fadeIn delay-100 text-white bg-black/50 p-4 rounded">
          Neural Nexus envisions a world where heritage manuscripts are not confined to archives but are part of daily learning, cultural understanding, and digital storytelling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {title: "Preservation First", desc: "Carefully digitizing ancient manuscripts to ensure historical accuracy and accessibility."},
            {title: "Cultural Celebration", desc: "Highlighting the beauty, scripts, and illustrations that define cultural identity."},
            {title: "Technology Driven", desc: "Using AI, translation, and interactive media to bring manuscripts to a global audience."}
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 bg-black/50 text-white animate-fadeIn">
              <h3 className="font-bold text-xl mb-2 text-heritageGold">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-12 text-center bg-black/30 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-xl mb-4 text-heritageGold">Neural Nexus</h3>
            <p className="text-sm leading-relaxed">
              Preserving heritage manuscripts through AI-powered storytelling and immersive culture exploration.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-heritageGold">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-heritageGold">Home</a></li>
              <li><a href="/contact" className="hover:text-heritageGold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-heritageGold">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-heritageGold">FaceBook</a>
              <a href="#" className="hover:text-heritageGold">Twitter</a>
              <a href="#" className="hover:text-heritageGold">InstaGram</a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-8">&copy; 2025 Neural Nexus. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
