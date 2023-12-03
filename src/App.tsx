import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from './axios';

function App() {
  useEffect(() => {
    async function getMe() {
      try {
        const response = await axios.get('/get-me');
        if('token' in response.data && 'userData' in response.data){
          console.log(response.data);
          // localStorage.setItem('token', response.data.token);
        }
      } catch (err: any) {
        console.log(err.message);
      }
    }
    getMe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' index element={<Index />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
