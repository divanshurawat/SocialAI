import { useDropzone } from 'react-dropzone';
import { Button, Typography } from '@mui/material';
import { Upload } from '@mui/icons-material';
import { processFile } from '../utils/textExtractor';
import { analyzeContent } from '../utils/analysis';
import { useCallback } from 'react';

export default function FileUpload({ setAnalysis, setLoading, setError }) {
  const onDrop = useCallback(async (files) => {
    try {
      setLoading(true);
      setError('');
      const result = await processFile(files[0]);
      const analysis = await analyzeContent(result.text);
      setAnalysis({ 
        ...analysis, 
        text: result.text,
        file: files[0] 
      });
    } catch (err) {
      setError(err.message);
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  }, [setAnalysis, setLoading, setError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'dragging' : ''}`}>
      <input {...getInputProps()} />
      <Upload fontSize="large" />
      <Typography variant="h6">
        Drag & drop file here, or click to select
      </Typography>
      <Typography variant="body2">
        Supported formats: PDF, PNG, JPG
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Choose File
      </Button>
    </div>
  );
}
