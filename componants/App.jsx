import React from "react";

import { Component } from "react";

//import Product from "./Product";
import Navbar from "./navbar";
//import Cart from "./cart";

import { Route,Routes  } from "react-router-dom";
import About from './about';
import Conatact from './contact';
import Home from './home';

class App extends Component {
    state = {  } 



    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <Routes>
               <Route path="/about" element={<About/>} />
               <Route path="/Contact" element={<Conatact/>} />
               <Route path="/"  element={<Home />}/>
               </Routes>
            </React.Fragment>

        );
    }
}
 
export default App;