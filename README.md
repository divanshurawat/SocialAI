# Social Media Content Analyzer

## 1. Introduction
The **Social Media Content Analyzer** is a tool designed to analyze social media content for sentiment, keyword frequency, and engagement metrics. It helps users understand trends, audience sentiment, and content effectiveness across various social media platforms.

---

## 2. How to Use?

### **Method 1: Installation & Setup**
1. Clone the repository:
   ```sh
   git clone 
   cd socialMediaContentAnalyzer
   ```
2. Install dependencies:
   ```sh
   npm install
   npm intall OpenAi
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`
5. Upload an image (`jpg`, `jpeg`, `png`) or `PDF`. (Either drag & drop or select manually)
6. View sentiment analysis, keyword frequency, and engagement metrics in the results section.

### **Method 2: Access Via Live Link**
1. Open your browser and copy-paste the below link:
   - [Live Demo]
2. Upload an image (`jpg`, `jpeg`, `png`) or `PDF`. (Either drag & drop or select manually)
3. View sentiment analysis, keyword frequency, and engagement metrics in the results section.

---

## 3. Features
- **Sentiment analysis** of social media posts
- **Document Upload (Drag & Drop or Choose File)**
- **Text Extraction**
- **OCR (Optical Character Recognition): For image files (scanned documents), extract text using OCR technology (e.g., Tesseract).**

---

## 4. Technology Stack
- **Frontend:** React, Vite, MUI (Material-UI)
- **Backend:** Node.js, Express.js
- **APIs & Libraries:**
  - NLP libraries (`Tesseract.js`)
  - OpenAI for content analysis
  - PDF parsing with `pdf-parse` and `pdfjs-dist`
  - `React Dropzone` for file uploads
  - `React Spinners` for loading indicators

---

## 5. System Architecture
The system consists of:
- A **frontend interface** built using React, Vite, and MUI for a modern, responsive UI.
- A **backend** that fetches and processes social media data.
- **External APIs & Libraries** to fetch real-time social media data and perform content analysis.

---

## 6. Implementation Details
### **Frontend:**
- Built using **React, Vite, and MUI** for a fast and scalable UI.
- Implements **drag-and-drop file uploads** with `React Dropzone`.
- Uses **React Spinners** for enhanced user experience.

### **Backend:**
- Uses **Express.js** to handle API requests and data processing.
- Utilizes **OpenAI** for advanced content analysis.(used free openai api from github)
- Extracts text from PDFs using `pdf-parse` and `pdfjs-dist`.

---

## 7. Conclusion
The **Social Media Content Analyzer** provides valuable insights into social media trends and engagement. Future improvements will enhance accuracy and usability, making it a more robust tool for digital marketers and content creators.

---
