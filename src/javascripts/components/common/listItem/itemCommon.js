
import React from 'react'

class itemCommon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        let {cat} = this.props || []
        let {lib} = this.props || []        
        console.log(this.props)
        return(
            <dl className="com-list">
                <dt>{lib}：</dt>
                {
                    cat.map((item,i)=>(
                        <dd key={item.id}><a>{item.type}</a></dd>
                    ))
                }        
            </dl>
        )
    }
}

export default itemCommon