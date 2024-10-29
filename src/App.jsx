import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password,setPassword] = useState('');
  const [passLength,setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setSpecialCharAllowed] = useState(false)
  
  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(password).then(()=>{
      alert('Copied to Clipboard')
    })
    .catch(()=>{
      alert("something went wrong")
    }
    )}
  
  useEffect(()=>{
    passwordGenerator()
  },[passLength,numberAllowed,charAllowed]);

  const passwordGenerator = ()=>{
    let passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      passStr = passStr+"1234567890"
    }
    if(charAllowed){
      passStr = passStr+"!@#$%^&*()_"
    }
  let value;
  let pass = "";
  for(let i=1;i<=passLength;i++) {
    value = Math.floor(Math.random()*passStr.length+1);
    pass = pass + passStr.charAt(value);
  }
  setPassword(pass) ;
  
  }

  const SliderChange = (e) =>{
    setLength(e.target.value)
  }


  return (
    <>
    <div className="container">
      <div className="card">
        <div className="card-header">
        <h2 className='text-center'>Password Generator</h2>
        </div>
        <div className="card-footer">
          <input type="text" className="mx-3 px-3 text-center" placeholder='Password' value={password} style={{border : '2px solid black'}}/>
          <button className='btn btn-primary' onClick={copyToClipboard}>Copy</button>
          <br />
          <input type="range" name="passwordRange" id="" onChange={SliderChange}  min={6} max={20} value={passLength} />
          <p>Password length : {passLength}</p>
          <input type="radio" name="numAllowed" id="" onClick={()=>setNumberAllowed(true)} />
          

          <label htmlFor="numAllowed">Number</label>
          <input type="radio" name="SpecialChar" id="" onClick={()=>setSpecialCharAllowed(true)} />
          <label htmlFor="SpecialChar">Special Char</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
