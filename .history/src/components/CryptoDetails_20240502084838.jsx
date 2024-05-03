import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from'react-router-dom'
import millify from 'millify'
import { Row, Col, Select, Typography } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';


const { Option } = Select;
const { Title, Text } = Typography;

const CryptoDetails = () => {
  const { currencyId } = useParams();
  return (
    <div>CryptoDetails {currencyId}</div>
  )
}

export default CryptoDetails