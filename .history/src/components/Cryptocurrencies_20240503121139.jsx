import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12:500;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
    //filtering search for coins
    const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setCryptos(filteredData);
    }, [cryptoList, searchTerm]);


  if(isFetching) return 'Loading...'
  return (
    <>
      {!simplified && (
              <div className='search-crypto'>
              <Input key={"Cryptocurrencies"} placeholder='Search Cryptos' onChange={(e) => setSearchTerm(e.target.value)}></Input>
            </div>
      )}
        <Row gutter={[32, 32]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
              <Link to={`/crypto/${currency.id}`} key={"cryptocurrenciess"}>
                <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} hoverable="true"/> }>
                  <p>Price: {millify(currency.price)}</p>
                  <p>MarketCap: {millify(currency.marketCap)}</p>
                  <p>Change: {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
    </>
  )
}

export default Cryptocurrencies