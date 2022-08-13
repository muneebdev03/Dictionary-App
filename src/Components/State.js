import { useState } from "react"
import React from 'react'
import { color } from "@mui/system"
function State(){
    // state for onchange
    const [text,setText] = useState("") 
    // state for show type words
    const [word,setWord] = useState("")
    const [color,setColor] = useState("blue")

    const [showText,setShowText] = useState("How are you")
    // state for hide the text
    // const [hide,setHide] = useState()
    

    function changehandle(e){
        setText(e.target.value)
        setWord(e.target.value)
    }   

    function colorhandle(){
        setColor(color == "blue"? "red":"blue")
    }
    
    
    function hidehandle(){
setShowText(showText == "How are you" ?  " " : "How are you")


}
        
    


    return(
    <div>
        <div>
            <input type="text"  value = {text}onChange={changehandle}></input>
        </div>
        <div>
            <h2>{word}</h2>
        </div>
        <div>
            <h1 style={{color: color}}>Hello Muneeb how are you!</h1>
            <button onClick={colorhandle}>click</button>
        </div>
<div>
        <h1>{showText}</h1>
        <button onClick={hidehandle}>Hide/Show</button>
</div>   
        
    </div>
    )
}
export default State