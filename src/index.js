import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import App from './App';
import Mon from "./components/days/Mon"
import Tues from "./components/days/Tues"
import Wed from "./components/days/Wed"
import Thurs from "./components/days/Thurs"
import Fri from "./components/days/Fri"
import Sat from "./components/days/Sat"
import Sun from "./components/days/Sun"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigation />
          <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />}/>
                <Route exact path='/Mon' element={<Mon />}/>
                <Route exact path='/Tues' element={<Tues />}/>
                <Route exact path='/Wed' element={<Wed />}/>
                <Route exact path='/Thurs' element={<Thurs />}/>
                <Route exact path='/Fri' element={<Fri />}/>
                <Route exact path='/Sat' element={<Sat />}/>
                <Route exact path='/Sun' element={<Sun />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
