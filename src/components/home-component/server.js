// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import required modules
const express = require('express'); // Web framework for creating the server and handling requests
const axios = require('axios'); // HTTP client for making requests to external APIs
const app = express(); // Create an instance of express
const port = process.env.PORT || 5000; // Determine the port to listen on, defaulting to 5000 if not specified

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Define a POST route '/api/ask' for asking questions
app.post('/api/ask', async (req, res) => {
  try {
    // Make a POST request to the OpenAI API with the question from the request body
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo', // Specify the model to use
      prompt: req.body.question, // The question from the client
      temperature: 0.5, // Controls randomness, lower is more deterministic
      max_tokens: 100, // Maximum length of the generated answer
    }, {
      headers: {
        // Set the Authorization header with the API key from the environment variables
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    // Send back the trimmed answer as JSON
    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    // Respond with a 500 status code and an error message if the request fails
    res.status(500).json({ message: 'Error processing your request' });
  }
});

// Start the server and listen for requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
