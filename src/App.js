import React from "react";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return <div className="App">
    
    
    {/*Header*/}
    <Header/>
    
    {/*App Body*/}
    <div className="app__body">     
      
    {/*Sidebar*/}
    <Sidebar/> 

    {/*Feed*/}
    <Feed/>

    {/*Widgets*/}

    
    </div>
   

    

  </div>;
}

export default App;
