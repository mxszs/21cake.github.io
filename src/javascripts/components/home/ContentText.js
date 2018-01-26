
import React from 'react'

class ContentText extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            
            <div className='content-text'>
            	<h4>廿一客<span>/文章</span></h4>
            	<div className='content-text-info'>
            		<a>
	            		<img src={require('../../../assets/img/active1.jpg')} alt="" />
	         			<h4>12月刊.松子</h4>
	         			<p>阅读全文 >></p>
         			</a>
         			<a>
	            		<img src={require('../../../assets/img/active2.jpg')} alt="" />
	         			<h4>12月刊.松子</h4>
	         			<p>阅读全文 >></p>
         			</a>
            	</div>
            	
            </div>

        )
    }
}
export default ContentText