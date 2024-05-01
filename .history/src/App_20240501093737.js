import React from 'react'
import './App.css';
import { Switch, Route, Link,Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails,News } from './components';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
          </div>
        </Layout>
      </div>
      <div className='footer'>
        <h2>footer</h2>
      </div>
    </div>
  )
}

export default App