import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/crypto/:coindId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer' level={3} styles={{ color: "white", textAlign: "center" }}>
        <Typography.Title className='footer'>
          CrypotVerse <br/>
          All Rights Reserved!
        </Typography.Title>
      </div>
    </div>
  )
}

export default App