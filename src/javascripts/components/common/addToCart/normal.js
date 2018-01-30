
import React from 'react'

class Normal extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let {data} = this.props
        let normal = []
        let showNormal = {}
        for(let key in data.productsArr){
            normal.push( data.productsArr[key])
            if(data.productsArr[key].spec === this.props.spec){
                showNormal=data.productsArr[key]
            }
        }

        console.log(showNormal)
        return(
            <div>
                <h4>￥{showNormal.price}</h4>
                {/* <div className="multiply con">
                    <p></p>
                    <ul className="clear">
                        <li>
                            <a className="activer">
                                <i></i>
                            </a>
                        </li>                          
                        <li><a>更多></a></li>
                    </ul>
                </div>
               
                 */}
                <div className="normal con">
                    <p>商品规格</p>
                    <ul className="clear">
                    {
                        normal.map((item)=>(
                            <li className={item.spec === "更多磅数" ? "hide":'show'} key={item.id}><a className={showNormal.spec === item.spec?"activer":''}>{item.spec}<i></i></a></li>               
                        ))
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Normal