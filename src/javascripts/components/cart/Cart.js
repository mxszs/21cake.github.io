import React from 'react'
import CartSubmit from './CartCompoments/Cart-submit'
import CartBox from './CartCompoments/CartBox'
import Recommend from './CartCompoments/Recommend'
import $ from 'jquery';
class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            box:[]
        }
    }
    render() {
        let {data,box} = this.state
        return (
            <div id='cart_box'>
                        <div className="cart_box">
                            <CartBox box={box}></CartBox>
                            <CartSubmit></CartSubmit>
                            <Recommend data={data}></Recommend>
                        </div>
                   </div>
                    )
            }
        componentWillMount(){
            let that = this
            $.ajax({
                type:'GET',
                url:'http://api.21cake.com/?method=Advertisement.show&v=1.0&cityId%5Bregion_id%5D=22&channel=pc&position=cart_bottom%2Ccart_banner%2Ccart_suggest',
                async: true,
                dataType: 'jsonp',
                success(data){
                    if(data.status === 'ok'){
                       // console.log(data)
                        that.setState({data:data.data.cart_bottom})
                        that.setState({box:data.data.cart_suggest})
                    }
                }
            })
        }
}
export default Cart