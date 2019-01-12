import React, {Component} from 'react'
import {List ,Badge} from 'antd-mobile'
import './public.css'

const  Item  = List.Item;
const Brief = Item.Brief;


export default class Msg extends Component{


    render(){
        return (
            <List>
                <Item
                    thumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                    extra={ <Badge text={1}  />}
                >
                    <span>在吗，好久没见你了</span>

                    <Brief>沐小白</Brief>
                </Item>
            </List>
        )
}}

