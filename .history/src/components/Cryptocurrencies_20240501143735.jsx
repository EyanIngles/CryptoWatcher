import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12:100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [searchTerm, setSearchTerm] = useState("")
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  console.log(cryptoList)

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [cryptoList, setSearchTerm])

  if(isFetching) return 'Loading...'
  return (
    <>  <div className='search-crypto'>
          <Input placeholder='Search Cryptos' onClick={(e) => setSearchTerm(e.target.value)}></Input>
        </div>
        <Row gutter={[32, 32]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} hoverable/> }>
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