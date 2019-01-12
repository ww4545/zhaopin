import React,{Component,Fragment} from 'react'
import {Button ,List ,InputItem , WhiteSpace} from 'antd-mobile'

import './public.css'
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <Fragment>
                <div className="imgBox">
                    <div className={"imgbg"}></div>
                </div>
                <List>
                    <InputItem
                        type="text"
                        placeholder="输入账号"
                    >
                    账号
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="输入密码"
                    >
                     密码
                    </InputItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">登录</Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">注册</Button>
            </Fragment>
        )
    }
}