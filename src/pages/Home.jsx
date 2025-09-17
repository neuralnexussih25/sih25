import React from "react";
import { Link } from "react-router-dom";
import demoVideo from "../assets/demo.mp4";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="font-serif text-parchment min-h-screen relative overflow-x-hidden bg-heritagePattern bg-cover bg-fixed">

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={demoVideo}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 animate-fadeIn text-heritageGold drop-shadow-lg">
            Explore Our Heritage
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl animate-fadeIn delay-200 text-gray-100">
            Discover the timeless manuscripts of our ancestors transformed into immersive storytelling.
          </p>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 px-6 text-center">
        <div className="bg-black/40 p-8 rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fadeIn text-heritageGold">
            Neural Nexus
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-6 animate-fadeIn delay-100 text-gray-100">
            Neural Nexus bridges the gap between ancient manuscripts and modern storytelling. Our AI workflow extracts, translates, and visualizes the essence of history into videos, making heritage accessible to everyone.
          </p>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed animate-fadeIn delay-200 text-gray-100">
            Witness the poetry, philosophy, and wisdom embedded in manuscripts across generations, revived through technology and creativity.
          </p>
        </div>
      </section>

      {/* Gallery Preview (Carousel with Overlapping) */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeIn text-heritageGold">
          Gallery Preview
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-4xl"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="w-[280px] h-[380px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`Manuscript ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
                  <h3 className="font-bold text-lg text-heritageGold">
                    Ancient Script {i + 1}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Process / Features */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeIn text-heritageGold">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "OCR Extraction", desc: "Tesseract and OpenCV extract text from ancient manuscripts, preserving every detail of the script." },
            { title: "Translation", desc: "AI models convert classical scripts into modern language for accessibility." },
            { title: "Story Generation", desc: "Condenses translated text into captivating scripts for videos." },
            { title: "Visual Enhancement", desc: "Illustrations and backgrounds are enhanced to match historical context." },
            { title: "Voice Narration", desc: "AI-generated narration brings manuscripts to life in audio form." },
            { title: "Video Rendering", desc: "Combines script, visuals, and audio into a final storytelling video." },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 animate-fadeIn"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <h3 className="font-bold text-xl mb-4 text-heritageGold">
                {i + 1}. {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-100">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Quote */}
      <section className="py-20 px-6 text-center">
        <blockquote className="max-w-4xl mx-auto italic text-xl md:text-2xl leading-relaxed border-l-4 border-heritageGold pl-6 animate-fadeIn bg-black/30 p-4 rounded-lg text-gray-100">
          "The past is not dead. It is alive in our manuscripts, in our stories, and in our culture."
        </blockquote>
      </section>

      <section className="py-20 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fadeIn text-heritageGold">
    What Historians Say
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {[
      {
        name: "Dr. Rao",
        quote: '"THIS WAS A MANUSCRIPT OF THE NIGHT WE COULDN\'T READ" - Jack Kerouac',
      },
      {
        name: "Ms. Ananya",
        quote: '"I WON\'T LEAVE ANY UNFINISHED MANUSCRIPTS" - Harold Robbins',
      },
      {
        name: "Prof. Suresh",
        quote: '"MANUSCRIPTS DO NOT BURN" - Mikhail Bulgakov',
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-black/40 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 animate-fadeIn"
        style={{ animationDelay: `${i * 200}ms` }}
      >
        <p className="text-sm leading-relaxed mb-4 text-gray-100">{item.quote}</p>
        <h3 className="font-bold text-lg text-heritageGold">{item.name}</h3>
      </div>
    ))}
  </div>
</section>



      {/* Newsletter Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fadeIn text-heritageGold">
          Subscribe for Updates
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed animate-fadeIn delay-100 bg-black/50 p-4 rounded-lg text-gray-100">
          Stay updated with AI-generated manuscripts, videos, and cultural insights.
        </p>
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 animate-fadeIn delay-200">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg flex-1 bg-black/30 text-parchment border border-heritageGold focus:outline-none focus:ring-2 focus:ring-heritageGold"
          />
          <button className="bg-heritageGold text-deepMaroon font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 mt-8 relative text-parchment backdrop-blur-sm bg-black/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2 text-yellow-400">Neural Nexus</h3>
            <p className="text-sm leading-relaxed text-gray-100">
              Preserving heritage manuscripts through AI-powered storytelling.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-yellow-400">Quick Links</h3>
            <ul className="text-sm space-y-1 text-gray-100">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/upload" className="hover:text-yellow-500">Showcase</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4 text-sm text-gray-100">
              <a href="#" className="hover:text-yellow-500">Facebook</a>
              <a href="#" className="hover:text-yellow-500">Twitter</a>
              <a href="#" className="hover:text-yellow-500">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-4 text-gray-100">
          &copy; 2025 Neural Nexus. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
