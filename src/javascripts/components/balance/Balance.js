import React from 'react'
import CartSubmit from '../cart//CartCompoments/Cart-submit'
import CartBox from '../cart/CartCompoments/CartBox'
import Recommend from '../cart//CartCompoments/Recommend'
import Delivery from './bannece-box/delivery-info'

import $ from 'jquery';
class Balance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow:true
        }
    }
    render() {
        let {data,box,isShow} = this.state
        return (
            <div id='cart_box'>
                        <div className="cart_box">
                            <Delivery></Delivery>
                            <CartBox isShow={isShow} box={box}></CartBox>
                            <CartSubmit isShow={isShow}></CartSubmit>
                           
                        </div>
                   </div>
                    )
            }
   
}
export default Balance