import React from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SignUp />
            </div>
        </BrowserRouter>
    );
}

export default App;
