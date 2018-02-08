import React from 'react'

class Delivery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
      
        return (
           <div className="delivery-info">
			<h3 className="delivery-info-title">配送信息</h3>
			<div id="address-info-content" className="delivery-info-content">
				<div id="cart-address-button" className="cart-address-button" ><i></i>添加新的地址</div>
				<div id="select-address-button" className="cart-address-button" style={{display: 'none'}}><i></i>选择新地址</div>
				<div className="delivery-address" id="delivery-address-detail" style={{display: 'none'}}>
					<div className="left-info" id="action-ship-info-block">

						<input type="hidden" name="address_id" id="input-address-id"/>
						<h3></h3>
						<span className="phone-number"><i></i></span>
						<span className="address"><i></i></span>

					</div>
					<div className="right-button">
						<a href="#" id="select-address-btn">切换地址(<span>0</span>)</a>
						<a href="#" id="add-address-btn">+添加新地址</a>
					</div>
				</div>

				<div className="delivery-time">
					<span>配送时间</span>
					<input type="text" name="ship_date" id="ship-date" placeholder="请选择配送日期" className="hasDatepicker"/>
					<select name="ship_time_scope" id="ship-time-scop">
						<option>时间</option>
					</select>
					<span>配送时间有前后15分钟误差，塘沽地区15:00开始配送</span>
				</div>
				<div className="delivery-mode">
					<span>配送方式</span>
					<label><input type="radio" name="shipping_id" value="1" id="action-delivery-dispatch" checked="checked"/>&nbsp;21cake配送</label>
					<label><input type="radio" name="shipping_id" value="2" id="action-delivery-self-pick"/>&nbsp;站点自提<span id="self-pick-address"></span></label>
					<input type="hidden" name="distribution_id" id="distribution_id"/>
				</div>
			</div>
		</div>

                    )
            }
   
}
export default Delivery