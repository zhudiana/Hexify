export type ExtractedColor = {
  hex: string;
  percentage: number;
  rgb?: [number, number, number];
};

export type UploadResponse = {
  uploadedImageUrl: string;
  colors: ExtractedColor[];
};

export async function uploadImageFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`Upload failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as {
    image_url: string; // e.g. "/static/uploads/filename.jpg"
    colors: ExtractedColor[];
  };

  return {
    uploadedImageUrl: `http://localhost:5000${data.image_url}`,
    colors: data.colors,
  };
}
