
import React,{useState} from "react"; 
import './../styles/App.css';

const App = () => {
  let [name,setName] = useState("") // "A"

  // console.log("name from usestate", name) //"A"


  function manageName(event){
      // console.log("ur typed input",event.target.value)
      setName(event.target.value) //a
  }
  return (
    <div>
        {/* Do not remove the main div */}
        Enter your name:
        <input type="text" placeholder="Enter Your Name" 
                  onChange={manageName}
                  value={name}
                  
                 />
                     {/* <button onClick={()=>setName("")}> Clear </button> */}

                    <p>Hello {name}!</p>
    </div>
  )
}

export default App
