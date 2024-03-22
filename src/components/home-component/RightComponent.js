import React, { useState } from "react";
import AnswerComponent from "./AnswerComponent";
import QuestionComponent from "./QustionComponent";
import QuestionDisplayComponent from "./QuestionDisplayComponent";
import Paper from '@mui/material/Paper';

const RightComponent = () => {
  const [questions, setQuestions] = useState([]); // Use an array to store multiple questions

  const handleSendQuestion = (newQuestion) => {
    console.log(newQuestion); // For demonstration purposes
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]); // Add new question to the list
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px' }}>
      <Paper style={{ maxHeight: '80vh', overflowY: 'auto', marginBottom: '40px', padding: '20px',
    backgroundColor: '#00031F', minWidth: "600px" }}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <QuestionDisplayComponent question={question} />
            <AnswerComponent />
          </div>
        ))}
      </Paper>
      <div style={{
        position: 'fixed', 
        bottom: '20px', 
        left: '63%',
        
        transform: 'translateX(-50%)', 
        maxWidth: '600px', 
        width: '100%', 
       // padding: '0 20px', 
       // backgroundColor: 'white', 
        //boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000, // Ensure it's above other content
      }}>      <QuestionComponent onSendQuestion={handleSendQuestion}/>
      </div>
    </div>
  );
};

export default RightComponent;
