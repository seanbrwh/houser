import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {update_all} from '../../ducks/reducer';

class StepOne extends Component{
    handleChange(input,val){
        if(input === 'name'){this.setState({name:val})}
        if(input === 'address'){this.setState({address:val})}
        if(input === 'city'){this.setState({city:val})}
        if(input === 'state'){this.setState({curState:val})}
        if(input === 'zip'){this.setState({zipcode:val})}
    }
    render(){
        
        let {name,address,city,curState,zipcode} = this.props
        return(
            <div>
            <input 
                placeholder='Property Name' 
                type="text" 
                onChange={(e)=>{ this.handleChange('name',e.target.value)}}
            />
            <input 
                placeholder='Address' 
                type="text" 
                onChange={(e)=>{ this.handleChange('address',e.target.value)}}
            />
            <input 
                placeholder='City' 
                type="text" 
                onChange={(e)=>{ this.handleChange('city',e.target.value)}}
            />
            <input 
                placeholder='State' 
                type="text" 
                onChange={(e)=>{ this.handleChange('state',e.target.value)}}
            />
            <input 
                placeholder='Zipcode' 
                type="text" 
                onChange={(e)=>{ this.handleChange('zip',e.target.value)}}
            />
            <Link to='/wizard/step2'> 
                <button onClick={()=> this.props.update_all(name,address,city,curState,zipcode)}>
                    Next Step
                </button> 
            </Link>
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
export default connect(mapStateToProps,{update_all})(StepOne)