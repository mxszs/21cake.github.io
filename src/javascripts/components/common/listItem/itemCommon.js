
import React from 'react'

class itemCommon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:[]
        }
    }   
    componentWillReceiveProps(props){
        let {goods} = props.goods || {}
        let num = []
        if(goods){
            goods.forEach(item => {
                let arr = item.tag_ids.split(",")
                num.push(...arr)
            });
            num = [...new Set(num)].sort((a,b)=>(a-b))
        }
        // if(this.state.isShow){return false}
        let isShow ={}
        num.forEach((i)=>{
            props.data.content.forEach((item)=>{
                if(i == item.id){
                    isShow[i] = true
                    return
                }
            })
            this.setState({isShow:isShow})
            
        })
    }
    render(){   
        let {data} = this.props

        let path = this.props.path || ''
        let id = this.props.id || ''
        let pathID = this.props.pathID ||''
        return(
            <dl className="com-list">
                <dt>{data.name}：</dt>
                <dd>
                    <a  
                        className={ path ? path === '0'?"active":'':id===''||id==='0' ? "active":''}
                        onClick={ path ? this.props.changePath.bind('','0'):this.props.changeId.bind('','0')}
                    >
                        {data.name.length==='0'?'':data.name==='分类'?'全部分类':'全部口味'}
                    </a>
                </dd>
                
                {
                    data.content.map((item,i)=>(
                        
                        <dd key={i} className={  pathID==='0' ? '' : item.id ? this.state.isShow[item.id] ? "" : 'disable':'' }>
                            <a 
                                className={ path ? path===item.sort?"active":'':id===item.id?"active":''}
                                onClick={ path ? this.props.changePath.bind('',item.sort):  item.id ? this.state.isShow[item.id] ? this.props.changeId.bind('',item.id):'':''}
                            >
                            {item.name}
                            </a>
                        </dd>
                    ))
                }        
            </dl>
        )
    }
}


export default itemCommon