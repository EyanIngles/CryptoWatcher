import React from 'react'
import '.App.css'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>

      </div>
      <div className='footer'>
        <h2>footer</h2>
      </div>
    </div>
  )
}

export default App