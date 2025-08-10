import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Header from "../components/Header";

export default function HowItWorks() {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const [colors, setColors] = useState([
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

  const copyToClipboard = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Upload failed:", errorText);
      return;
    }

    const data = await res.json();
    setUploadedImage(`http://localhost:5000${data.image_url}`);
    setColors(data.colors);
  };

  function exportPalette(colors: { hex: string; percentage: number }[]) {
    const payload = {
      name: "Hexify Palette",
      exportedAt: new Date().toISOString(),
      colors, // [{hex, percentage}]
    };

    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `palette-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Header onlyLogo />
      <section
        id="how-it-works"
        className="bg-gray-50 text-gray-800 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Try it with a sample
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Not sure what to upload? Here's a sample image and the color palette
            it generated:
          </p>

          {/* Preview Image */}
          <div className="flex justify-center">
            <img
              src={
                uploadedImage ??
                "https://www.coolphptools.com/userfiles/images/sample.jpg"
              }
              alt="Preview"
              className="w-64 sm:w-72 rounded border bor`der-gray-300 shadow-sm"
            />
          </div>

          {/* Upload */}
          <div className="mt-6">
            <label className="inline-block px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 cursor-pointer">
              Upload Your Image
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Palette Table */}
          {colors.length > 0 && (
            <div className="mt-12 overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse rounded-lg shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3">Color</th>
                    <th className="p-3">HEX</th>
                    <th className="p-3">Percentage</th>
                    <th className="p-3">Action</th>
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
                          className="w-24 flex items-center space-x-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-md hover:bg-teal-100 transition-colors text-sm"
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
          )}
          <button
            onClick={() => exportPalette(colors)}
            className="mt-6 px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
          >
            Export palette (JSON)
          </button>
        </div>
      </section>
    </>
  );
}
