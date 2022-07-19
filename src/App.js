import React from 'react';
import Sidebar from './components/SideBar';
import './App.scss';
import {Routes, Route} from "react-router-dom"
import { Inicio } from './components/Inicio';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
            <Route path="/" exact element={<Inicio/>} />
            <Route path='/item/:id' element={<></>} />
            <Route path='/category/:category' element={<></>}/>
            <Route path="/cart" element={<></>} />
      </Routes>
    </div> 
  );
};

export default App;
