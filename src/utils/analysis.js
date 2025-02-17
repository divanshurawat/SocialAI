import OpenAI from 'openai';

export const analyzeContent = async (text) => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    baseURL: "https://models.inference.ai.azure.com",
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{
        role: "user",
        content: `Analyze this social media post and provide engagement improvement suggestions. Consider these aspects:
        - Sentiment analysis
        - Hashtag recommendations
        - Emoji usage
        - Call-to-action suggestions
        - Trending topic alignment
        
        Post content: ${text}`
      }]
    });
    
    return {
      suggestions: response.choices[0].message.content,
      originalText: text
    };
  } catch (err) {
    throw new Error('Analysis failed: ' + err.message);
  }
};