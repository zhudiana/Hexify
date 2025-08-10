# Hexify: Color Palette Generator (CPG)

Hexify is a simple and powerful web application that generates a color palette from any uploaded image. Using clustering algorithms, it extracts the dominant colors and displays them with their HEX codes, RGB values, and percentage contributions. The app is built with a modern stack: a TypeScript + Tailwind CSS frontend and a Flask backend.

---

## Features

- **Upload an image and generate a color palette**
- **Displays dominant colors** with their RGB and HEX values
- **Shows the percentage** of each color in the image
- **Optimized performance** with image downscaling and pixel sampling
- **Modern frontend**: TypeScript, React, Tailwind CSS
- **Robust backend**: Flask, Python, Pillow, NumPy, SciPy, Matplotlib
- **Planned features**:  
  - User authentication  
  - Save palettes to user accounts  
  - Export palettes as JSON

---

## Tech Stack

### Frontend
- **TypeScript**
- **React**
- **Tailwind CSS**

### Backend
- **Flask** – Web framework for building the application
- **Pillow** – Python Imaging Library for image processing
- **NumPy** – For numerical operations
- **SciPy** – For clustering and whitening
- **Matplotlib** – For reading image files

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** (for the frontend)
- **Python 3.x** and **pip** (for the backend)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/zhudiana/Hexify.git
cd Hexify
```

#### 2. Set up the backend
```bash
cd Backend
python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On Mac/Linux
pip install -r requirements.txt
python app.py
```

#### 3. Set up the frontend
Open a new terminal:
```bash
cd Frontend
npm install
npm run dev
```

---

## Usage

1. Open the frontend in your browser (usually at `http://localhost:5173`).
2. Upload an image.
3. View the generated color palette, including HEX, RGB, and percentage values.

---

## Roadmap

- [x] Image upload and palette generation
- [x] Display HEX, RGB, and percentage
- [ ] User authentication
- [ ] Save palettes to user accounts
- [ ] Export palettes as JSON

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
