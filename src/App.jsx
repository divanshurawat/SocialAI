import { useState } from 'react';
import FileUpload from './components/FileUpload';
import AnalysisResults from './components/AnalysisResults';
import { GridLoader } from 'react-spinners';
import './App.css';

function App() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="app">
      <h1>Social Media Content Analyzer</h1>
      
      {error && <div className="error">{error}</div>}

      {!analysis && !loading && (
        <FileUpload 
          setAnalysis={setAnalysis}
          setLoading={setLoading}
          setError={setError}
        />
      )}

      {loading && (
        <div className="loader">
          <GridLoader color="#36d7b7" />
          <p>`Analyzing content...</p>
        </div>
      )}

      {analysis && <AnalysisResults analysis={analysis} />}
    </div>
  );
}

export default App;