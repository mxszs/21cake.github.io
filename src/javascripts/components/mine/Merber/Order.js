
import React from 'react'
class  MemberOrder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {id:1,type:'unfinished',name:'未完成'},
                {id:2,type:'all',name:'近期'},
                {id:3,type:'older',name:'历史订单'}
            ],
            isShow:'unfinished'
        }
      //  this.isFinite = this.isFinite.bind(this)
    }
    isFinite(type){
        this.setState({isShow:type})
    }
    render(){
        let {isShow,list} = this.state
        return(
                <div className='member_Info'>
                  <div className="content-box">
                        <ul className="order-tab-list">
                            {
                                list.map(item=>(
                                    <li className={isShow===item.type?'active':''} key={item.id} onClick={this.isFinite.bind(this,item.type)} >{item.name}</li>
                                ))
                            }
                        </ul>
                        <ul className="order-list-box"><div style={{textAlign:'center',marginTop:'80px',color:'#D5BFA7',}}>没有相关订单...</div></ul>
                        <div className="page-box"></div>
                        <div id="page-box"></div>
                        <div className="order-loading" style={{display: 'none'}}>正在加载...</div>
                    </div>
                </div>
        )
    }
}
export default MemberOrder

