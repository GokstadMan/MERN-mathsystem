import { useState,useEffect } from "react";
import axios from "axios";


function App() {


  useEffect(() => {
    axios.get("http://localhost:7500/get-users").then((response)=>{
      console.log(response)})
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
