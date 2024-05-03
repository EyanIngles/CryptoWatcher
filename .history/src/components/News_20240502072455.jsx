import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi';

const { Text, Title } = Typography;
const { Option } = Select

const demoImage = ""

const News = (simplified) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count: simplified? 6:12 });
  console.log(cryptoNews)

  if(!cryptoNews?.value) return 'Loading...';
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch className='select-news' placeholder='Select a Crypto'
            optionFilterProp='children' onChange={(value) => console.log(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>

          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable="true" className='news-card'>
            <a href={news.Url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)}...`
                : news.description
                }
              </p>
              <div className='provider-container'>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="News"/>
                <Text className='provider-name'>{news.provider[0]?.name}</Text>

              </div>
              <Text>{moment(news.dataPublished).startOf('ss').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News