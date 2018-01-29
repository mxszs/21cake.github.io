
import React from 'react'

class Multiply extends React.Component{
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
        let multiply = []
        let showMultiply={}
        for(let key in data.productsArr[0].productsArr){
            multiply.push(data.productsArr[0].productsArr[key])
            if(this.state.spec===data.productsArr[0].productsArr[key].spec){
                showMultiply=data.productsArr[0].productsArr[key]
            }
        }


        return(
            <div>
                 <h4>￥{showMultiply.price}</h4>
                <div className="multiply con">
                    <p>{data.title}</p>
                    <ul className="clear">
                        <li>
                            <a className="activer">
                                {data.productsArr[0].name}
                                <i></i>
                            </a>
                        </li>                          
                        <li><a>更多></a></li>
                    </ul>
                </div>
                <div className="normal con">
                    <p>商品规格</p>
                    <ul className="clear">
                        {
                            multiply.map((item,i)=>(
                                <li key={i}><a onClick={this.changeSpec.bind(this,item.spec)}  className={showMultiply.spec === item.spec?"activer":''}>{item.spec}<i></i></a></li>               
                            ))
                        }


                    </ul>
                </div> 
            </div>
        )
    }
}
export default Multiply