import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText);
    }
    const handleTextClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }




    const [text, setText]=useState('');
    // text="change here"        // wrong way to change the state.
    // setText("new text");         // correct way to change the state.
  return (
    <>
       <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>         
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>         
            <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>         
            <button className="btn btn-primary mx-2"  onClick={handleCopy}> Copy Text</button>         
            <button className="btn btn-primary"  onClick={handleExtraSpace}>Remove Extra Spaces</button>         
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
 
  )
}

