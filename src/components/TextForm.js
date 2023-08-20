import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
       let newtext= text.toUpperCase();
       setText(newtext);
       props.showAlert("Converted to upper case","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        
    }

    const handleLowClick = () =>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success");
    }

    const handleAudioClick = () =>{
        if('speechSynthesis' in window){
            const synthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.6;
            synthesis.speak(utterance);
            props.showAlert("converted to audio","success");
           
        }else{
            console.log("Browser does not support Audio");
        }
    }
           
    const handleClearClick = () =>{
        let newtext="";
        setText(newtext);
        props.showAlert("Text cleared","success");
    }

    const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,
        color : props.mode === 'dark' ? 'white' : '#042743'}} id="my box" rows="8"></textarea>
        </div>
        <button class="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button class="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button class="btn btn-primary mx-1" onClick={handleAudioClick}>Audio</button>
        <button class="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-2" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.0032 * text.split(" ").length} Seconds read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter something in the textbox to preview it here'}</p>
    </div>

    </>
  )
}
