import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi';

const { Text, Title } = Typography;
const { Option } = Select

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  return (
    <div>News</div>
  )
}

export default News