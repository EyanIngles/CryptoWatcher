import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return "Loading...";
  return (
    <div>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}></Statistic></Col>
            <Col span={12}><Statistic title="Total Exchanges" value="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total Market Cap" value="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value="5"></Statistic></Col>
            <Col span={12}><Statistic title="Total Markets" value="5"></Statistic></Col>
        </Row>
    </div>
  )
}

export default Homepage