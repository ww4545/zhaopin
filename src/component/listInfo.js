import React,{Component,Fragment} from 'react'
import {NavBar  } from 'antd-mobile'

import Cards from '../layui/Card'
import Footer from '../layui/footbar'
import './public.css'


export default class ListInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            dataSource:{}
        }
    }
    render(){
        const navbar = this.state.type==="boss"?"招聘列表":"牛人列表";
        return(
            <Fragment>
                <NavBar>{navbar}</NavBar>
                <Cards />
                <Footer></Footer>
            </Fragment>
        )
    }
}