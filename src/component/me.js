import React,{Component,Fragment} from 'react'
import {Button,List,Result, WhiteSpace } from 'antd-mobile'

const  Item  = List.Item;
const Brief = Item.Brief;


export default  class Me extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <Fragment>
                <Result
                    img={  <img src={require(`../img/avatar/boy.png`)} className=" am-icon-lg" alt="" />}
                    title="沐小白"
                    message={<div>国企单位</div>}
                />
                <List renderHeader={() => '简介'} className="my-list">
                    <Item >
                        前端开发
                        <Brief>个人的简介</Brief>
                        <Brief>薪资：15k</Brief>
                    </Item>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">退出登录</Button>
            </Fragment>
        )
    }
}