import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {update_img} from '../../ducks/reducer'

class StepTwo extends Component{
    handleChange(val){
        this.setState({img:val})
    }
    render(){
        let {img} = this.props
        return(
            <div>
            <input 
                placeholder='Image Url' 
                type="text" 
                onChange={(e)=>{ this.handleChange(e.target.value)}}
            />
            <Link to='/wizard/step3'> 
                <button onClick={()=> this.props.update_img(img)}>
                    Next Step
                </button> 
            </Link>
            {JSON.stringify(this.state)}
            </div>
        )
    }
}
function mapStateToProps(state){
    let {img} = state
    return{
        img
    }
}
export default connect(mapStateToProps,{update_img})(StepTwo)