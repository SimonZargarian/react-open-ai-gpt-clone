import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const QuestionDisplayComponent = ({ question }) => {
    return question ? (
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: "#f5f5f5", marginTop: "120px",  }}>
        <Typography variant="body" component="body" style={{ color: "#000000" }}>
          {question}
        </Typography>
      </Paper>
    ) : null;
  };
export default QuestionDisplayComponent;
