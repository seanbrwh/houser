import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {update_name,update_address,update_city,update_state,update_zipcode} from '../../ducks/reducer'


class StepOne extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:0
        }
    }
    componentDidUpdate(props,state){
        if(props !== state){
            this.setState({
                name: this.props.name,
                address:this.props.city,
                city: this.props.city,
                state: this.props.curState,
                zipcode:this.state.zipcode
            })
        }
    }   
    render(){
        let {update_name,update_address,update_city,update_state,update_zipcode} = this.props
        return(
            <div>
            <input 
                placeholder='Property Name' 
                type="text" 
                onChange={(e)=> update_name(e.target.value)}
            />
            <input 
                placeholder='Address' 
                type="text" 
                onChange={(e)=> update_address(e.target.value)}
            />
            <input 
                placeholder='City' 
                type="text"    
                onChange={(e)=> update_city(e.target.value)}
            />
            <input 
                placeholder='State' 
                type="text" 
                onChange={(e)=> update_state(e.target.value)}
            />
            <input 
                placeholder='Zipcode' 
                type="text" 
                onChange={(e)=> update_zipcode(e.target.value)}
            />
            <Link to='/wizard/step2'> 
                <button>
                    Next Step
                </button> 
            </Link>
            {JSON.stringify(this.props)}
            {JSON.stringify(this.state)}
            </div>
        )
    }
}

function mapStateToProps(state){
    const {name,address,city,curState,zipcode} = state
    return{
        name, 
        address, 
        city, 
        curState, 
        zipcode
    }
}
export default connect(
    mapStateToProps,
    {update_name,update_address,update_city,update_state,update_zipcode}
)(StepOne)