import React from "react";
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Enterprise from './components/Enterprise';
import NavBar from './components/Header';
import Footer from './components/Footer';
import Customers from './components/Customs'


class App extends React.Component{
    render(){
      return (
        <BrowserRouter>
            <div>
              <div className='container'>
                <NavBar />
                <Switch>
                  <Route path="/" component={Landing} exact />
                  <Route path="/enterprise" component={Enterprise} exact />
                  <Route path="/customers" component={Customers} exact />
                </Switch>
                <Footer />
              </div>
            </div>
        </BrowserRouter>
      );
    }
};


export default App