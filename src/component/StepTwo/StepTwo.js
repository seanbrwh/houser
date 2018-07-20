import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {update_img} from '../../ducks/reducer';


class StepTwo extends Component{
    render(){
        let {update_img} = this.props
        return(
            <div>
            <input 
                placeholder='Image Url' 
                type="text" 
                onChange={(e)=> update_img(e.target.value)}
            />
            <Link to='/wizard/step3'> 
                <button>
                    Next Step
                </button> 
            </Link>
            {JSON.stringify(this.props)}
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