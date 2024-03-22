import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import GptLogo from "./home-assets/chatgpt-logo.png";


  const LeftTopComponent = () => {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        padding: '20px' 
      }}>
        <img src={GptLogo} alt="Descriptive Alt Text" style={{ maxWidth: '100px', marginBottom: '20px' }} />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            fontSize: '1.25rem', // Adjusts the font size, making the text bigger
            padding: '10px 24px', // Increases padding for larger button size
            backgroundColor: '#5a4bff', // Custom background color
            '&:hover': {
              backgroundColor: '#0056b3', // Custom hover color
            },
            // Icon size adjustment using the CSS selector for the SVG element
            '& .MuiSvgIcon-root': { fontSize: '28px' }, // Custom icon size
          }}
        >
          NEW CHAT
        </Button>
      </div>
    );
  };

export default LeftTopComponent;
