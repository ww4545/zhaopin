import React,{Component,Fragment} from 'react'
import {List,TextareaItem ,NavBar ,Grid ,Icon} from 'antd-mobile'
import './public.css'

const  Item  = List.Item;
const Brief = Item.Brief;
const emoji = '😃 🐻 🍔 🔣 ♡ ❤ 😂 😍 🔥 😊 🎁 🎌 📲 🆕 '

export default class MsgText extends Component{
    constructor(props){
        super(props)
        this.state={
            showEmoj:false
        }
    }
    componentDidMount(){

    }
    fixCarousel=()=>{
        setTimeout(()=>{
            window.dispatchEvent(new Event('resize'))
        },0)
    }
   render(){
       console.log(this.state.showEmoj)
   const emo =  emoji.split(' ').filter(v=>v).map(v=>({text:v}));
        return (
            <Fragment>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >聊天记录</NavBar>
              <div style={{marginBottom:"50px"}}>
                  <List>
                      <Item
                          thumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                          className={"chat"}
                      >
                          <TextareaItem
                              value={"这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法这两种办法法"}
                              editable={false}
                              autoHeight
                              labelNumber={5}
                          />
                      </Item>
                  </List>
                  <List >
                      <Item
                          extra={<img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" alt=""/>}
                          className={"chat-me"}
                      >
                          <TextareaItem
                              value={"这两种办法法"}
                              editable={false}
                              autoHeight
                              labelNumber={5}
                              style={{textAlign:"right"}}
                          />
                      </Item>
                  </List>
              </div>
             <div className={"send-msg"}>
                <div style={{  display: "flex",alignItems:"flex-end"}}>
                    <div style={{flex:1,lineHeight:"50px"}}>
                        <TextareaItem
                            clear
                            labelNumber={5}
                            type={"text"}
                            autoHeight
                            placeholder={"请输入"}
                        >
                        </TextareaItem>
                    </div>
                    <div  style={{flex:"0 0 100px",marginBottom:10}}>
                        <span style={{padding:"0 20px",width:40}}
                            onClick={()=>{
                                this.setState({
                                    showEmoj:!this.state.showEmoj
                                })
                                this.fixCarousel()
                            }}
                        >😂</span>
                        <span >发送</span>
                    </div>
                </div>
                 {
                     this.state.showEmoj===true?
                         <div  id="grid">
                             <Grid
                                 data={emo}
                                 columnNum={5}
                                 carouselMaxRow={2}
                                 isCarousel={true}
                                 passive={false}
                             />
                         </div>:null
                 }
             </div>
            </Fragment>

        )
}}

