import React, {useContext} from 'react'
import { ThemeContext } from './ContextExample';
import Workspace2 from './Workspace2';


export default function Workspace() {
    const darkTheme = useContext(ThemeContext);
    console.log(darkTheme);
    
    const themeStyle = {

        backgroundColor: darkTheme ? 'black': "white",
        color: darkTheme ?'white' : "black",
        height: "600px",
        width: "80%",
        border: "1px solid green",
        margin: "auto"
    }
   
    return (
        <div style={themeStyle}>
            <h1>Workspace 1</h1>
            <Workspace2 />
        </div>
    )
}