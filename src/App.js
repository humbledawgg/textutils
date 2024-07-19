
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [mode,setMode] = useState("light")

  const toggleMode = () =>{
    if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#010c1c'
    document.body.style.color = 'white'
    showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Enabled" , "success")
    }
  }
  const [alert,setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ 
      msg : message ,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
      
    }, 1500)
  }
  return (
    
<>
       <BrowserRouter>
            <Navbar title="TextUtility" aboutUs ="About TextUtility" mode = {mode} toggleMode={toggleMode}/>
            <div className="container">
            <Alert alert = {alert}/> 
            <Routes>
                <Route exact path='/' element={ <TextForm heading ="Enter the text to analyze below" mode = {mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
               
                <Route exact path='/About'element={<About   mode = {mode} toggleMode={toggleMode} />}/>
                  
                
                </Routes>
            </div>
        </BrowserRouter>  
        
</>
  );
}

export default App;
