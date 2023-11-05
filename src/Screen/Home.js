import React from 'react'
import './Home.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

import Calculator from '../Icon/keys.png';
import ScientificCalculator from '../Icon/scientific-calculator.png';
import Calendar from '../Icon/calendar.png';

export default function Home() {
  return (
    <div>
      <Button className='HomeItemButton'>
        <img src={Calculator}/>
        <h2>Calculator</h2>
        <div>
          asdfgh
        </div>
      </Button>
      <Button className='HomeItemButton'>calendar</Button>
    </div>
  )
}
