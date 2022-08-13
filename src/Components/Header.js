import React from 'react'
import { useState,} from 'react'
import '../App.css'


const Header = () => {
 
   
    const [data,setData] = useState({})
    const [word,setWord] = useState("")
    const [display,setDisplay] = useState("HEY ASK ME !")

    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    let changeHandler = (event) =>{
        setWord(event.target.value)
        setDisplay(event.target.value)
        
    }
    let clickHandler = (event) =>{
        if(event.key === 'Enter'){
            
            fetch(api)
            .then(response =>  response.json())
            .then(apidata => {
                console.log(apidata)
                apidata.map((wdata,key)=>{
                    console.log(wdata)
                    setData(wdata)
                   
                })
            })
        
        }
        
    }
  return (
    <div className='Header'>
        <div className='logo'>
            <h1 className='logo_heading'>Dictonary App</h1>
        </div>
        <div className='title'>
            Word Hunting 
        </div>
        <div className='word'>
            <h1 className='display'>{display}</h1>
        </div>
        <div className='input'>
        <input className='inp-field' type="text" onChange={changeHandler}value={word} placeholder='Enter Here!' onKeyPress={clickHandler}/>
    
        <div className='word_main'>
            <h2>Words : {data.word}</h2>
        </div>    
         <div className='Defination'>
            <h2>Defination : {data.meanings?.[0].definitions?.[0].definition}</h2>
        </div>
            <div className='audio_main'>
                <h2 className='audio_edit'>AUDIO: </h2>
                <iframe src={data.phonetics?.[0].audio} className='audio'></iframe>
            </div>

        </div>
    </div>
  )
}

export default Header