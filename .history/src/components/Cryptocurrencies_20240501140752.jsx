import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  console.log(cryptoList)
  return (
    <>
    <Row gutter={[32, 32]} className='crypto-card-container'>
      {cryptos.map((currency) => (
        <Col xs={24} sm={12} lg={6}></Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies