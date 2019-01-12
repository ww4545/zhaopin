import React from 'react'
import {TabBar  ,Icon} from 'antd-mobile'

class Footerbar extends React.Component{
      constructor(props){
          super(props)
          this.state={
              selectedTab: 'redTab',
              hidden: false,
              fullScreen: false,
          }
      }
    render(){


    return(
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                tabBarPosition={'bottom'}
            >
                <TabBar.Item



                />
            </TabBar>

        </div>
    )
      }
}
export default Footerbar;