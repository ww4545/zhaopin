import React,{Component,Fragment} from 'react'
import {Button ,List ,InputItem , WhiteSpace ,Radio } from 'antd-mobile'

import './public.css'

const RadioItem  =Radio.RadioItem;

const RadioData = [
    { type: "boss", label: 'BOSS', extra: 'details' },
    { type: "gnius", label: '牛人', extra: 'details' },
    ];
export default class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"boss",
        }
    }
    onChange = (type) => {
        console.log(type);
        this.setState({
            type,
        });
    };

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
                        placeholder="密码"
                    >
                        密码
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="确认密码"
                    >
                        确认密码
                    </InputItem>
                </List>
                <List>
                    {RadioData.map(i => (
                        <RadioItem key={i.type} checked={this.state.type === i.type} onChange={() => this.onChange(i.type)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">立即注册</Button>
            </Fragment>
        )
    }
}