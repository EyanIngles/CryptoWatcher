import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <div className='main'>

      </div>
      <div className='footer'>
        <h2>footer</h2>
      </div>
    </div>
  )
}

export default App