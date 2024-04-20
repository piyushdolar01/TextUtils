import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const[Mode, setMode] = useState('light');//wether dark mode is enable or not 

  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
    }
    else{
      setMode ("light");
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
{/* <Navbar title= "TexttUtils" aboutText ="About TexttUtils"/> */}
<Navbar title="TextUtils" Mode = {Mode} toggleMode={toggleMode}/> 
<div className="container">
<TextForm heading = "Enter the text to analyze below" Mode = {Mode}/> 
{/* <About/> */}
</div>
    </>
  ); 
}

export default App;