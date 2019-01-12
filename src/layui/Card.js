import React from 'react'
import {Card } from 'antd-mobile'



const Cards=(props)=>{

    return (
        <Card >
            <Card.Header
                title="名字"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>职位：前端开发</span>}
            />
            <Card.Body>
                <div>个人简介</div>
            </Card.Body>
        </Card>
    )
}

export default Cards;