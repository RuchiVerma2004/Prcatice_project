import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

// const heading = React.createElement("h1",{id:"heading"},"Namaste Javascript");
const root = ReactDOM.createRoot(document.getElementById("root"));



const Applayout = ()=>{
    return(
        <div class="app">
            <Header/>
            
        </div>
    );
};

root.render(<Applayout/>);