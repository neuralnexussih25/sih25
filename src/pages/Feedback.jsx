import React, { useState } from "react";

export default function Feedback() {
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("❌ Please fill all required fields.");
      return;
    }
    alert("✅ Thank you for your feedback!");
    setFormData({
      fullName: "",
      email: "",
      rating: "",
      category: "",
      subject: "",
      message: "",
    });
    setCharCount(0);
  };

  return (
    <div className="bg-heritage-pattern bg-fixed bg-repeat min-h-screen flex flex-col">
      {/* Feedback Section */}
      <div className="flex-1 flex justify-center items-center px-6 py-16">
        <div className="bg-black/70 backdrop-blur-md text-parchment shadow-2xl rounded-2xl max-w-2xl w-full p-8 md:p-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-2">
            Share Your Feedback
          </h2>
          <p className="text-center text-sm text-parchment/80 mb-6">
            Help us improve <span className="text-[#FFB347]">NeuralNexus</span>{" "}
            by sharing your experience and suggestions. We value your input and
            will respond within 24 hours.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1 - Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD700]/40 text-parchment placeholder-parchment/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD700]/40 text-parchment placeholder-parchment/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block font-semibold text-sm mb-2">
                Overall Rating
              </label>
              <div className="flex gap-3 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={formData.rating === String(star)}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span
                      className={`transition ${
                        formData.rating >= star
                          ? "text-[#FFD700]"
                          : "text-parchment/40"
                      }`}
                    >
                      ★
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-sm mb-2">
                Feedback Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD700]/40 text-parchment focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              >
                <option value="" hidden>
                  Select a category
                </option>
                <option
                  value="bug"
                  className="bg-[#FFD700] text-deepMaroon font-semibold"
                >
                  Bug Report
                </option>
                <option
                  value="feature"
                  className="bg-[#FFD700] text-deepMaroon font-semibold"
                >
                  Feature Request
                </option>
                <option
                  value="uiux"
                  className="bg-[#FFD700] text-deepMaroon font-semibold"
                >
                  UI/UX
                </option>
                <option
                  value="general"
                  className="bg-[#FFD700] text-deepMaroon font-semibold"
                >
                  General Feedback
                </option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block font-semibold text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief summary of your feedback"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD700]/40 text-parchment placeholder-parchment/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-sm mb-2">
                Your Feedback *
              </label>
              <textarea
                name="message"
                rows="4"
                maxLength="200"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please share your detailed feedback (max 200 characters)"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-[#FFD700]/40 text-parchment placeholder-parchment/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700] resize-none"
              ></textarea>
              <div className="text-right text-xs text-parchment/70 mt-1">
                {charCount}/200 characters
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!formData.message.trim()}
              className="w-full py-3 rounded-lg font-semibold text-lg transition disabled:opacity-60 disabled:cursor-not-allowed bg-[#FFD700] text-deepMaroon font-semibold"
            >
              Submit Feedback
            </button>
            <p className="text-right text-sm text-[#FFB347] mt-2">
              We’ll resolve it soon!
            </p>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-10 mt-12 text-center bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-parchment">
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">
              Neural Nexus
            </h3>
            <p className="text-base leading-relaxed">
              Preserving heritage manuscripts through AI-powered storytelling
              and immersive culture exploration.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">
              Quick Links
            </h3>
            <ul className="text-base space-y-2">
              <li>
                <a href="/" className="hover:text-heritageGold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-heritageGold">
                  About
                </a>
              </li>
              <li>
                <a href="/upload" className="hover:text-heritageGold">
                  Upload
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-heritageGold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 text-heritageGold">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6 text-lg">
              <a href="#" className="hover:text-heritageGold">
                Facebook
              </a>
              <a href="#" className="hover:text-heritageGold">
                Twitter
              </a>
              <a href="#" className="hover:text-heritageGold">
                Instagram
              </a>
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
