import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super()
        this.state ={
            name:'', 
            address:'', 
            city:'', 
            state:'',
            zipcode:0
        }
    }
    handleChange(input,val){
        if(input === 'name'){this.setState({name:val})}
        if(input === 'address'){this.setState({address:val})}
        if(input === 'city'){this.setState({city:val})}
        if(input === 'state'){this.setState({state:val})}
        if(input === 'zip'){this.setState({zipcode:val})}
    }
    addHome(){
        const {name,address,city,state,zipcode} = this.state
        axios.post('/api/houses',{name,address,city,state,zipcode}).then(result =>{
            
        })
    }
    render(){
        return(
            <div>
            <h1>Wizard</h1>
            <input placeholder='Property Name' type="text" valuse={this.state.name} onChange={(e)=>{ this.handleChange('name',e.target.value)}}/>
            <input placeholder='Address' type="text" valuse={this.state.address} onChange={(e)=>{ this.handleChange('address',e.target.value)}}/>
            <input placeholder='City' type="text" valuse={this.state.city} onChange={(e)=>{ this.handleChange('city',e.target.value)}}/>
            <input placeholder='State' type="text" valuse={this.state.state} onChange={(e)=>{ this.handleChange('state',e.target.value)}}/>
            <input placeholder='Zipcode' type="text" valuse={this.state.zipcode} onChange={(e)=>{ this.handleChange('zip',e.target.value)}}/>
            <Link to='/'> <button onClick={()=> this.addHome()}>Complete</button> </Link>
            <Link to='/'> <button>Cancel</button> </Link>
            {JSON.stringify(this.state)}
            </div>
        )
    }
}