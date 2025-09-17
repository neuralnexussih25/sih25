import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! We have received your message and will contact you at ${formData.email}.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-serif text-parchment min-h-screen relative overflow-x-hidden bg-heritagePattern bg-cover bg-fixed">

      {/* Hero Section */}
      <section className="relative w-full h-96 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
        <h1 className="relative text-5xl md:text-6xl font-bold mb-4 text-heritageGold drop-shadow-lg animate-fadeIn">
          Contact Us
        </h1>
        <p className="relative text-lg md:text-2xl max-w-2xl animate-fadeIn delay-200">
          Get in touch with Neural Nexus team to discuss manuscripts, collaborations, or cultural projects.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-heritageGold animate-fadeIn">
          Send a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-black/40 p-8 rounded-lg shadow-xl grid gap-6 animate-fadeIn"
        >
          {["name","email","message"].map((field, i) => (
            <div key={i} className="flex flex-col text-left">
              <label htmlFor={field} className="mb-2 font-bold capitalize">{field}</label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  required
                  className="p-3 rounded-lg bg-black/30 text-parchment border border-heritageGold focus:outline-none focus:ring-2 focus:ring-heritageGold"
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows={6}
                  className="p-3 rounded-lg bg-black/30 text-parchment border border-heritageGold focus:outline-none focus:ring-2 focus:ring-heritageGold"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-heritageGold text-deepMaroon font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-heritageGold">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {["OCR Specialist", "Translator & AI", "Video & Story Creator"].map((role, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 bg-black/40 animate-fadeIn"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <h3 className="font-bold text-xl mb-2 text-heritageGold">Member {i + 1}</h3>
              <p className="text-sm leading-relaxed">{role} – Expert in heritage preservation & AI storytelling.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-heritageGold">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "How do I upload my manuscript?", a: "Use the Upload page to submit your manuscript." },
            { q: "What formats are accepted?", a: "PDF, images, and text files are supported." },
            { q: "How long does AI take to generate the video?", a: "Usually a few minutes depending on manuscript size." },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-black/40 p-6 rounded-lg shadow-lg text-left animate-fadeIn"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <h3 className="font-bold text-lg mb-2 text-heritageGold">{faq.q}</h3>
              <p className="text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

                 {/* Footer */}
      <footer className="py-10 mt-12 text-center bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-parchment">
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">Neural Nexus</h3>
            <p className="text-base leading-relaxed">
              Preserving heritage manuscripts through AI-powered storytelling
              and immersive culture exploration.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">Quick Links</h3>
            <ul className="text-base space-y-2">
              <li><a href="/" className="hover:text-heritageGold">Home</a></li>
              <li><a href="/about" className="hover:text-heritageGold">About</a></li>
              <li><a href="/upload" className="hover:text-heritageGold">Upload</a></li>
              <li><a href="/contact" className="hover:text-heritageGold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-lg">
              <a href="#" className="hover:text-heritageGold">Facebook</a>
              <a href="#" className="hover:text-heritageGold">Twitter</a>
              <a href="#" className="hover:text-heritageGold">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center text-base mt-8 text-gray-200">
          &copy; 2025 Neural Nexus. All Rights Reserved.
        </p>
      </footer>


    </div>
  );
}
