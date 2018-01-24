
import React from 'react'

import ItemCommon from '../../common/listItem/itemCommon'
import Item from "../item";
class Cake extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cat:[
                {id:2,type:"全部分类"},
                {id:3,type:"蛋糕"},
                {id:4,type:"冰淇淋"},
                {id:5,type:"小切块"},
                {id:6,type:"咖啡"},
                {id:7,type:"常温蛋糕"},
                {id:8,type:"设计师礼品"},
            ],  
            tag:[
                {id:2,type:"全部口味"},
                {id:3,type:"乳脂奶油"},
                {id:4,type:"慕斯"},
                {id:5,type:"乳酪"},
                {id:6,type:"巧克力"},
                {id:7,type:"坚果"},
                {id:8,type:"水果"},
                {id:9,type:"含酒"},
                {id:10,type:"咖啡"},  
                {id:11,type:"冰淇淋"},
            ],
            item:[
                {
                    cake_goods_id:"631",
                    cat_id:"3",
                    name:"枣儿",
                    price:"298.00",
                    spec:"2.0磅",
                    tags:[  
                        {id: "22", content: "聚会"},
                        {id: "30", content: "新品"}
                    ],
                    label:[
                        {name: "新品", icon: "/upload/images/1e22720bd656f7bac246159010c7e1f4.png"}
                    ],
                    img_url:"/upload/images/a447e5ccf956dcb889fe44674ebf214f.jpg"

                }
            ]
        }
    }

   

    render(){
        return(
            <div className="cake-box">
                <div className="cake-top">
                    <ItemCommon cat={this.state.cat} lib ="分类"/>
                    <ItemCommon cat={this.state.tag} lib ="口味"/>
                </div>
                <ul className="cake-list">
                        <Item data={this.state.item}/>
                    </ul>
            </div>
        )
    }
}
export default Cake