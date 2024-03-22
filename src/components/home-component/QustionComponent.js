import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Extend the theme to customize TextField colors and add the new functionality
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Change outline color
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(98, 98, 98, 1)',
          },
          // Change text and icon color when focused
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(98, 98, 98, 1)',
          },
          // Change the text color
          '& .MuiInputBase-input': {
            color: '#e0e0e0', // Custom text color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Change label color
          color: 'rgba(98, 98, 98, 1)',
          '&.Mui-focused': {
            color: 'rgba(98, 98, 98, 1)', // For focused state
          },
        },
      },
    },
  },
});

export default function QuestionComponent({ onSendQuestion }) {
  const [question, setQuestion] = useState('');

  const handleSendQuestion = () => {
    onSendQuestion(question); // Call the passed handler
    setQuestion(''); // Reset question input after sending
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendQuestion();
    }
  };

  return (
    <div>  
      <Paper elevation={3} style={{ padding: 10, textAlign: 'center', backgroundColor: "rgba(28, 30, 58, 1)", minWidth: "160px",}}>
        <ThemeProvider theme={theme}>
          <TextField 
            fullWidth
            label="Your Question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSendQuestion}>
                    <SendIcon style={{ color: 'rgba(98, 98, 98, 1)' }} />
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: '#e0e0e0' }, // This sets the text color
            }}
            InputLabelProps={{
              style: { color: '#e0e0e0' }, // Custom label color
            }}
          />
        </ThemeProvider>
      </Paper>            
    </div>
  );
}
