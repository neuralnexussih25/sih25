// src/pages/Heritage.jsx
import React from "react";

// Example images (replace with your actual images)
import manuscript1 from "../assets/img11.jpg";
import manuscript2 from "../assets/img12.jpg";
import manuscript3 from "../assets/img13.jpg";
import manuscript4 from "../assets/img14.jpg";

const heritageData = [
  {
    title: "Ancient Manuscript of Vedas",
    place: "Tamil Nadu, India",
    description:
      "This manuscript contains ancient Vedic hymns written on palm leaves, preserved for centuries.",
    img: manuscript1,
  },
  {
    title: "Medieval Temple Records",
    place: "Kerala, India",
    description:
      "Temple manuscripts documenting rituals, land grants, and cultural activities during medieval times.",
    img: manuscript2,
  },
  {
    title: "Sanskrit Literature Collection",
    place: "Karnataka, India",
    description:
      "A rich collection of classical Sanskrit literature preserved in palm-leaf format.",
    img: manuscript3,
  },
  {
    title: "Ancient Trade Records",
    place: "Maharashtra, India",
    description:
      "Manuscripts detailing trade activities, taxes, and maritime trade from ancient times.",
    img: manuscript4,
  },
];

export default function Heritage() {
  return (
    <section className="py-20 px-6 bg-black/10 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-heritageGold animate-fadeIn">
        Heritage Manuscripts & Their Places
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {heritageData.map((item, i) => (
          <div
            key={i}
            className="bg-black/40 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 animate-fadeIn"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-heritageGold mb-2">
                {item.title}
              </h2>
              <h3 className="text-md font-semibold text-[#FFD700] mb-4">
                {item.place}
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
