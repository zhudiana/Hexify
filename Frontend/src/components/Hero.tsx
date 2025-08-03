import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">
                  AI-Powered Color Extraction
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Extract Beautiful
                <span className="block text-teal-600">Color Palettes</span>
                from Any Image
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Transform your images into stunning color schemes instantly.
                Perfect for designers, developers, and creatives who need
                precise color extraction for their projects.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Instant results</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Export formats</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200/50">
              <div className="aspect-square bg-teal-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center space-y-4 hover:border-teal-400 transition-colors duration-300 cursor-pointer group">
                <button
                  onClick={() => navigate("/upload")}
                  className="group bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Upload Image</span>
                </button>

                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-gray-700">
                    Drop your image here
                  </p>
                  <p className="text-sm text-gray-500">or paste image</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
