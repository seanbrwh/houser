import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {update_rent,update_mortgage} from '../../ducks/reducer'


class StepThree extends Component{
    addHome(){
        let {name,address,city,curState,zipcode} = this.props
        axios.post('/api/houses',{name,address,city,curState,zipcode}).then(result =>{
            
        })
    }
    render(){
        return(
            <div>
            <input 
                placeholder='Mortgage' 
                type="text"
                onChange={(e)=> this.props.update_mortgage(e.target.value)}
            />
            <input 
                placeholder='Rent' 
                type="text" 
                onChange={(e)=> this.props.update_rent(e.target.value)}
            />
            <Link to='/'> 
                <button>
                    Complete
                </button> 
            </Link>
            {JSON.stringify(this.props)}
            </div>
        )
    }
} 
function mapState(state){
    let {name,address,city,curState,zipcode,mortgage,rent} = state
    return{
        name,
        address,
        city,
        curState,
        zipcode,
        mortgage,
        rent
    }
}

export default connect(mapState,{update_mortgage,update_rent})(StepThree)