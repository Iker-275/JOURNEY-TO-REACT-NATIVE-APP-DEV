import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tile from "./Tile";
import notes from "../notes";
import Form from "./Form";


var isLoggedIn = false;
var isUserRegistered = true;
function renderForm() {
   return  isLoggedIn === false ? < Form isUserRegistered={isUserRegistered}/> :  (<dl>
            {notes.map((item) =>
                <Tile key={item.key} title={item.title} content={item.content} />
            )}
        </dl>);
}


function App() {
    return (<div>
        <Header />
        {renderForm()}
        <Footer />
    </div>);
}


export default App;