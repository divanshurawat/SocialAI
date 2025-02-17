import { getDocument } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.min.mjs'; // Ensure worker script is loaded
import { createWorker } from 'tesseract.js';

let worker;

// Initialize the Tesseract worker asynchronously
const initializeWorker = async () => {
  worker = await createWorker('eng');
};

initializeWorker(); // Call this function at the start

export const processFile = async (file) => {
  try {
    if (file.type === 'application/pdf') {
      return await processPDF(file);
    }
    return await processImage(file);
  } catch (err) {
    throw new Error(`File processing failed: ${err.message}`);
  }
};

const processPDF = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    let text = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item) => item.str).join(' ') + ' ';
    }

    return {
      text: text.trim() || 'Could not extract text from PDF',
      format: 'PDF',
    };
  } catch (err) {
    throw new Error('PDF processing failed');
  }
};

const processImage = async (file) => {
  try {
    if (!worker) {
      await initializeWorker(); // Ensure worker is initialized
    }
    const { data: { text } } = await worker.recognize(file);
    return {
      text: text?.trim() || 'Could not extract text from image',
      format: 'Image',
    };
  } catch (error) {
    throw new Error('Image processing failed');
  }
};