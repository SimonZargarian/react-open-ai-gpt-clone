  import React, { useState, useEffect, useRef } from "react";
  import AnswerComponent from "./AnswerComponent";
  import QuestionComponent from "./QustionComponent";
  import QuestionDisplayComponent from "./QuestionDisplayComponent";
  import Paper from '@mui/material/Paper';
  import GptLogo from "./home-assets/chatgpt-logo.png";


  const RightComponent = () => {
    const [questions, setQuestions] = useState([]); // Use an array to store multiple questions
    const paperRef = useRef(null);

    const handleSendQuestion = (newQuestion) => {
      console.log(newQuestion); // For demonstration purposes
      setQuestions(prevQuestions => [...prevQuestions, newQuestion]); // Add new question to the list
    };

    useEffect(() => {
      // Scroll to the bottom of the Paper component whenever questions update
      if (paperRef.current) {
        paperRef.current.scrollTop = paperRef.current.scrollHeight;
      }
    }, [questions]); // Dependency array ensures this runs only when questions change

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px' }}>
        <div style={{ position: 'absolute', top: 310, left: 420, right: 0, zIndex: 1, display: 'flex', 
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ maxWidth: '100px', marginBottom: '-20px' }}>
      <img src={GptLogo} alt="Descriptive Alt Text" style={{ maxWidth: '100%' }} />
    </div>
    <h1 style={{ color: '#FFFFFF', textAlign: 'center', width: '100%' }}>How can i help you today?</h1>
  </div>
        <Paper ref={paperRef} style={{position: 'relative', zIndex: 2,  maxHeight: '80vh', overflowY: 'auto', marginBottom: '40px', padding: '20px',
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
          bottom: '60px', 
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
      /</div>
    );
  };

  export default RightComponent;
