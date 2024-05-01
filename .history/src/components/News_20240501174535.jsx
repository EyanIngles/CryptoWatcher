import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi';

const { Text, Title } = Typography;
const { Option } = Select

const demoImage = ""

const News = (simplified) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count: simplified? 6:12 });
  console.log(cryptoNews)

  if(!cryptoNews?.value) return 'Loading...';
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.value.map((cryptoNews, i) => (
        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable className='news-card'>
            <a href={''} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{cryptoNews}</Title>
                <p>{cryptoNews</p>
                <img src={''}/>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News