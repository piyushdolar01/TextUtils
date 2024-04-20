import React, {useState}from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
console.log("Uppercase was clicked" + text)
let newText = text.toUpperCase();
setText("you have clicked on handleUpcase")
setText(newText)
    }
    const handlelpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText("you have clicked on handleUpcase")
        setText(newText)
            }

            const handlecopy = ()=>{
              var text = document.getElementById("myBox");
              text.select();
              navigator.clipboard.writeText(text.value);
                  }

            const handleExtraSpaces =()=>{
              let newText = text.split(/[ ]+/);
              setText(newText.join(" "))
            }

        const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value)
        }
    const[text, setText] = useState(" ");
    // setText=("new text");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2"onClick={handleUpClick}>Conver to Uppercase</button>
  <button className="btn btn-primary mx-2"onClick={handlelpClick}>Conver to Lowercase</button>
  <button className="btn btn-primary mx-2"onClick={handlecopy}>Copy text</button>
  <button className="btn btn-primary mx-2"onClick={ handleExtraSpaces}>Extra Spaces</button>
    </div>  
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}character</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
