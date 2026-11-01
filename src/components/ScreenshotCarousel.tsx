"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Sparkles, X } from "lucide-react";

const screenshots = [
  {
    id: 1,
    src: "/assets/home.png",
    title: "Home Feed & Live Rooms",
    category: "Main Interface",
  },
  {
    id: 2,
    src: "/assets/Feed Screen.png",
    title: "Interactive Community Feed",
    category: "Social Feed",
  },
  {
    id: 3,
    src: "/screenshots/2.png",
    title: "Live Rooms & Multi-Mic Seats",
    category: "Interactive Rooms",
  },
];

export default function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-[#D4AF37]/20 via-[#B5952F]/15 to-[#8A7322]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore <span className="text-gradient">Nothing Live</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Experience our home feed, interactive community timeline, and high-definition animated live broadcast rooms.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Showcase Slide - Native App Slide Transition (No Dark Fade) */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[550px] rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/30 shadow-2xl shadow-black/80 group bg-[#1d0d18] flex items-center justify-center gpu-smooth">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentIndex}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 30 },
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden gpu-smooth"
              >
                <img
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].title}
                  className="w-full h-full object-contain bg-[#0f1126]"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1126]/90 via-transparent to-black/30 pointer-events-none" />

                {/* Slide Caption Box */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      {screenshots[currentIndex].category}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white drop-shadow-md">
                      {screenshots[currentIndex].title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setLightboxImage(screenshots[currentIndex].src)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all duration-300 active:scale-95"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Expand View</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#D4AF37] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 active:scale-90"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#D4AF37] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 active:scale-90"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>
          </div>

          {/* Thumbnail Selector */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {screenshots.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-20 sm:w-28 h-12 sm:h-16 ring-2 ring-[#D4AF37] scale-105 shadow-lg shadow-[#D4AF37]/40"
                    : "w-16 sm:w-20 h-10 sm:h-12 opacity-50 hover:opacity-100"
                }`}
              >
                <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-5xl w-full aspect-[16/9] max-h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black flex items-center justify-center gpu-smooth">
              <img src={lightboxImage} alt="Expanded Screenshot" className="max-w-full max-h-full object-contain" />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
