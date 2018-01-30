
import React from 'react'

import ItemCommon from '../../common/listItem/itemCommon'
import Item from "../item";
class Cake extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            path:this.props.path,
            id:''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            path: nextProps.path
        });
        this.setState({
            id: nextProps.id
        });

    }
    changePath(path){
        this.setState({path:path});
        this.setState({id:'0'});
    }
    changeId(id){
        this.setState({id:id});
    }

    render(){
        let {data} = this.props
        let id = this.state.id || "0"
        let arr = []
        for (const key in data.goodsArr) {
            arr.push(data.goodsArr[key])
        }
        return(
            <div className="cake-box">
                <div className="cake-top">
                    <ItemCommon data={data.cat} path={this.state.path} changePath={this.changePath.bind(this)}/>
                    <ItemCommon goods={data.goodsArr[this.state.path?this.state.path:'1']} pathID={this.state.path} id={id} data={data.tags.fa22bf77a31700498f707fc3b9d86dff} changeId={this.changeId.bind(this)}/>
                </div>
                <ul className="cake-list">
                    {
                        this.state.path==='0'?
                        arr.map((item,i)=>(
                            <div key={i} className={this.state.id==='0'?"clear":''}>
                                {
                                    this.state.id ==='0'?
                                    <div className="cake-item-title">
                                        <h2>
                                            {item.title}
                                            <span>{item.description}</span>
                                        </h2>
                                    </div>
                                    :''
                                }
                                <Item data={arr} path={i+1} id={this.state.id}/>
                            </div>
                        ))
                        : <Item data={arr} path={this.state.path} id={this.state.id}/>
                    }
                    </ul>
            </div>
        )
    }
}
export default Cake