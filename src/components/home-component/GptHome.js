import React from "react";
import { Grid } from "@mui/material";
import RightComponent from "./RightComponent";
import LeftTopComponent from "./LeftTopComponent";

function GPT() {
  return (
    <Grid container style={{ height: '100vh' }}>
      {/* Left-hand side container */}
      <Grid item xs={3} container direction="column">
        <Grid item sx={{ flex: 7 }} container justifyContent="center" alignItems="center">
          {/* Top-left item covering 70% of the height vertically */}
          <div style={{ 
            backgroundColor: '#00031F', 
            width: '100%', 
            minHeight: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            
          }}>
           <LeftTopComponent/> 
          </div>
        </Grid>
        <Grid item sx={{ flex: 3 }} container justifyContent="center" alignItems="center">
          {/* Bottom-left item directly under the top-left, covering 30% of the height vertically */}
          <div style={{ 
            backgroundColor: '#00031F', 
            width: '100%', 
            minHeight: '100%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderTop: '2px solid #e9e6ed'
          }}>Bottom Left</div>
        </Grid>
      </Grid>
      
      {/* Right-hand side item */}
      <Grid item xs={9} container justifyContent="center" alignItems="center">
        <div style={{ 
          backgroundColor: '#00031F', 
          width: '100%', 
          minHeight: '100%',
          display: 'flex', 
          justifyContent: 'center', 
          //alignItems: 'center',
          borderLeft: '2px solid #e9e6ed'
        }}><RightComponent/>
        </div>
      </Grid>
    </Grid>
  );
}

export default GPT;
