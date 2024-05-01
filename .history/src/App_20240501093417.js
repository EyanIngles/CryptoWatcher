import React from 'react'
import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
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
              <Route exact path='/'>
                <Homepage />
              </Route>
              </Routes>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
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