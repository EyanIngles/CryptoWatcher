import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistics } from 'antd';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}></Col>
        </Row>
    </div>
  )
}

export default Homepage