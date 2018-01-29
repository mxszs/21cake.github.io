
import React from 'react'

class Normal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            spec:this.props.spec
        }
    }
    
    
    changeSpec(spec){//更改磅数
        this.setState({spec:spec})
    }
    
    render(){
        let {data} = this.props
        let normal = []
        let showNormal = {}
        for(let key in data.productsArr){
            normal.push( data.productsArr[key])
            if(data.productsArr[key].spec === this.state.spec){
                showNormal=data.productsArr[key]
            }
        }
        return(
           normal ?
           <div>
                <h4>￥{showNormal.price}</h4>
                <div className="normal con">
                    <p>商品规格</p>
                    <ul className="clear">
                    {
                        normal.map((item,i)=>(
                            <li className={item.spec === "更多磅数" ? "hide":'show'} key={i}><a onClick={this.changeSpec.bind(this,item.spec)} className={showNormal.spec === item.spec?"activer":''}>{item.spec}<i></i></a></li>               
                        ))
                    }
                    </ul>
                </div>
            </div>
           :''
        )
    }
}
export default Normal