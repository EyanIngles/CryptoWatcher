import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
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
      <div className='footer'>
        <Typography.Title level={3} styles={{ color: "white", textAlign: "center" }}>
          CrypotVerse <br/>
          All Rights Reserved!
        </Typography.Title>
        <Space>
          <Link to="/">home </Link>
          <Link to="/exchanges">Exchange </Link>
          <Link to="/news">News </Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App