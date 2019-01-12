import React,{Component,Fragment} from 'react'
import {NavBar ,TabBar } from 'antd-mobile'

import './public.css'

const listBar = [
    {
       path:'/boss',
       text:'牛人',
       icon:'boss',
       title:'牛人列表',
       component:Boss,
       hide:'genius'
    },
    {
        path:'/genius',
        text:'Boss',
        icon:'genius',
        title:'Boss列表',
        component:Genius,
        hide:'boss'
    },
    {
        path:'/msg',
        text:'消息',
        icon:'msg',
        title:'消息列表',
        component:Msg,
        hide:'msg'
    },
    {
        path:'/me',
        text:'我的',
        icon:'me',
        title:'个人中心',
        component:Me,
        hide:'me'
    },
];
export default class ListInfo extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){

        return(
            <Fragment>
                <NavBar />123</NavBar>

                <TabBar />
            </Fragment>
        )
    }
}