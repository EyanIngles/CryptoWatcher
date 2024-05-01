import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}><Statistic title="Total CryptoCurrencies" valie="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total Exchanges" valie="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total Market Cap" valie="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total 24h Volume" valie="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total Markets" valie="5"></Statistic></Col>
        </Row>
    </div>
  )
}

export default Homepage