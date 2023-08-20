import './Appa.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import About from './components/About';



function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  // })
  
  const showAlert = (message,type) => {
          setAlert({
            message : message,
            type : type
          })
          setTimeout(() => {
            setAlert(null)
          },1600)
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode enabled","success")
      document.title = "TextUtils - light mode"
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled","success")
      document.title = "TextUtils - dark mode"
    }
  }

  const setColor = () => {
    document.body.style.backgroundColor = "#b30000"
  }
  

  return (
    <>
     {/* <BrowserRouter> */}
  <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} setColor={setColor} />
  <Alert alert= {alert} />
  <div className="container my-3" >

        
      {/* <Routes>
        <Route exact path="/home" element={<TextForm heading="Enter text" showAlert = {showAlert} mode = {mode} />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/*" element={<TextForm heading="Enter text" showAlert = {showAlert} mode = {mode} />} />
      </Routes> */}
      <TextForm heading="Enter text" showAlert = {showAlert} mode = {mode} />
  </div>
  {/* </BrowserRouter> */}
  
  {/* <About/> */}
</>
  );
}

export default App;