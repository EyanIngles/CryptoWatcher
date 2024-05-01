import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = (simplified) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count: simplified ? 6 : 12 });
  console.log(cryptoNews);

  if (!cryptoNews) return 'Loading...'; // Check if cryptoNews is undefined

  if (!cryptoNews.value || cryptoNews.value.length === 0) return 'No news available'; // Check if cryptoNews.value is empty
  
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'> {/* Fix: Change 'Url' to 'url' */}
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
