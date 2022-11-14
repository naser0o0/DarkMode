import React, {useContext } from 'react';
import { ThemeContext } from './ContextExample';
import Workspace5 from './Workspace5';


export default function Workspace3(){
    const darkTheme = useContext(ThemeContext);
   
    const themeStyle = {

        backgroundColor: darkTheme ? 'black' : "purple",
        color:  darkTheme ? "white" : 'black',
        height: "400px",
        width: "100%",
        border: "2px solid red",
        zIndex: "10000"
        

    }
    return(
        <div style={themeStyle}>
            <h1>Workspace 3</h1>
            <Workspace5/>
        </div>
    )
}