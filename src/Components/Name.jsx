import React from 'react'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Name = ({img,name}) => {
  return (
    <div className='flex items-center gap-4 '>
         <Avatar
    size={29}
    icon={<img src={img}/>}
  />
       <p >{name}</p>
    </div>
  )
}

export default Name