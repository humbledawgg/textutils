import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to upper case" , "success")
    }

    const handleSpeakClick = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      setText(text);
    }

    const handleCancelClick = () => {

      window.speechSynthesis.cancel()
      props.showAlert("Speech cancelled" , "success")

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces" , "success")
    }

    const handleLowClick =() =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Text converted to lower case" , "success")
  }

    const handleOnChange =(event) =>{
        setText(event.target.value)
    }

    const handleClearClick =() =>{
      setText("")
      props.showAlert("Text cleared" , "success")
  }

    const handleCopyClick =() =>{
      let text = document.getElementById("textBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" , "success")
    }
    const [text,setText] = useState("")



  
    
 

  return (
    <div>
<div class="mb-3 my-3">
  <h1>{props.heading}</h1>
  <textarea class={`form-control bg-${props.mode} text-${props.mode=== 'light' ? 'dark' : 'light'}`} id="textBox" placeholder="Enter your text here" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleSpeakClick}>Speak</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleCancelClick}>Stop Speech</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleExtraSpaces}>Handle Extra Spaces</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mb-3 mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>

<h1>Your Text Summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
<h2>Result Preview</h2>
<p>{text.length===0 ? "Nothing to preview" : text }</p>
    </div>

    
  )
}
