import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { CryptoCurrencies } from '../components/Cryptocurrencies'
import { News } from '../components/News'

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return "Loading...";
  return (
    <div>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}></Statistic></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>
        </Row>
        <div className='home-header-container'>
        <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies!</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more!</Link></Typography.Title>

        </div>
        <CryptoCurrencies simplefied/>
        <div className='home-header-container'>
        <Typography.Title level={2} className='home-title'>Latest CryptoCurrency News!</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to="/news">Show more!</Link></Typography.Title>

        </div>
        <News simplefied />
    </div>
  )
}

export default Homepage