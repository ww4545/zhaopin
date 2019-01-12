import React,{Component,Fragment} from 'react'
import {Button ,List ,InputItem , WhiteSpace ,Grid,TextareaItem } from 'antd-mobile'

import './public.css'
const imgString = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra';

const data = imgString.split(',').map((_val, i) => ({
    icon: require(`../img/avatar/${_val}.png`),
    text: _val
}));

export default class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"boss",
            img:''
        }
    }
    onShowVal=(val)=>{
        this.setState({
            img:val.text
        })
    }
    render(){
        const imgs = this.state.img;
        const types = this.state.type;
        return(
            <Fragment>
                <div >
                    <Grid
                        data={data}
                        activeStyle={false}
                        columnNum={5}
                        onClick={this.onShowVal}
                    />
                </div>
                <div>
                    <p>头像：{imgs!==''?<img src={require(`../img/avatar/${imgs}.png`)} alt={imgs}/>:null}</p>
                </div>
                <List>
                    <InputItem
                        type="text"
                        placeholder="面试职位"
                    >
                        面试职位
                    </InputItem>
                </List>
                <List>
                    <TextareaItem
                        title={types==="boss"?"招聘要求":"个人简介"}
                        placeholder={types==="boss"?"招聘要求":"个人简介"}
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                    />
                </List>
                {types==="boss"?<div>
                    <List>
                        <InputItem
                            type="text"
                            placeholder="公司名称"
                        >
                            公司名称
                        </InputItem>
                    </List>
                    <List>
                        <InputItem
                            type="text"
                            placeholder="职位薪资"
                        >
                            职位薪资
                        </InputItem>
                    </List>
                </div>:null}
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">保存</Button>
            </Fragment>
        )
    }
}