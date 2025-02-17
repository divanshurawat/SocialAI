import { useState } from "react";
import { Button, Typography, Paper, Box } from "@mui/material";

export default function AnalysisResults({ analysis }) {
  const [expanded, setExpanded] = useState(false);
  
  if (!analysis) return null;
  
  const previewText = analysis.text ? analysis.text.split(" ").slice(0, 30).join(" ") + "..." : "No text content available...";

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography 
        variant="h4" 
        sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}
      >
        📊 Analysis Results
      </Typography>

      <Paper 
        elevation={3} 
        sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa', borderRadius: 3 }}
      >
        <Typography 
          variant="h5" 
          sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}
        >
          📄 Content Preview
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ lineHeight: 1.6, color: 'text.secondary', textAlign: 'left' }}
        >
          {expanded ? analysis.text : previewText}
        </Typography>
        {analysis.text.length > 100 && (
          <Button 
            size="small" 
            onClick={() => setExpanded(!expanded)}
            sx={{ mt: 1, textTransform: "none" }}
          >
            {expanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </Paper>

      <Paper 
        elevation={3} 
        sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa', borderRadius: 3 }}
      >
        <Typography 
          variant="h5" 
          sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}
        >
          💡 Suggestions
        </Typography>
        <Typography 
          variant="body1" 
          whiteSpace="pre-wrap"
          sx={{ lineHeight: 1.8, color: 'success.main', p: 2, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 1, textAlign: 'left' }}
        >
          {analysis.suggestions || "No suggestions available"}
        </Typography>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => window.location.reload()}
          sx={{
            px: 6,
            py: 1.5,
            fontSize: '1.1rem',
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: 3,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 4
            }
          }}
        >
          Analyze Another File
        </Button>
      </Box>
    </Box>
  );
}
