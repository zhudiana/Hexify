import React, { useState } from "react";
import { X, Upload, Copy, Check } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [colors] = useState([
    { hex: "#f0a800", percentage: 22.17 },
    { hex: "#606030", percentage: 17.43 },
    { hex: "#d87800", percentage: 15.56 },
    { hex: "#484818", percentage: 9.79 },
    { hex: "#901818", percentage: 7.69 },
    { hex: "#301818", percentage: 4.91 },
    { hex: "#787848", percentage: 4.89 },
    { hex: "#c03018", percentage: 3.17 },
    { hex: "#d86018", percentage: 2.27 },
    { hex: "#181800", percentage: 2.21 },
  ]);

  if (!isOpen) return null;

  const copyToClipboard = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Color Extraction Demo
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Sample Image Section */}
          <section className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-2">Try it with a Sample</h3>
            <p className="text-gray-600 mb-6">
              Not sure what to upload? Here's a sample image and the color
              palette it generated:
            </p>

            <div className="mb-8">
              <img
                src="https://www.coolphptools.com/userfiles/images/sample.jpg"
                alt="Sample"
                className="w-80 h-60 object-cover mx-auto rounded-lg shadow-lg border border-gray-200"
              />
            </div>

            {colors.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Extracted Colors</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-semibold">Color</th>
                        <th className="p-4 font-semibold">Hex Code</th>
                        <th className="p-4 font-semibold">Percentage</th>
                        <th className="p-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {colors.map((color, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="p-4">
                            <div
                              className="w-16 h-8 rounded-md border border-gray-200 shadow-sm"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                          </td>
                          <td className="p-4 font-mono text-sm">{color.hex}</td>
                          <td className="p-4">{color.percentage}%</td>
                          <td className="p-4">
                            <button
                              onClick={() => copyToClipboard(color.hex)}
                              className="flex items-center space-x-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-md hover:bg-teal-100 transition-colors text-sm"
                            >
                              {copiedColor === color.hex ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
