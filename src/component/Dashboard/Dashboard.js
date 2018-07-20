import React,{Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            listOfHomes:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount(){
        axios.get('/api/houses').then(results=>{
            this.setState({listOfHomes:results.data})
        })
    }
    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(results=>{
            this.componentDidMount();
        })
    }
    render(){
        
        return(
            <div style={{marginBottom:'100px'}}>
            <h3>Dashboard</h3>
                
                {
                    this.state.listOfHomes.map(e=> {
                        return <House key={e.id} id={e.id} name={e.name} address={e.address} city={e.city} state={e.state} zip={e.zip} deleteHouse={this.deleteHouse}/>
                    })
                }
                <Link to='/wizard/step1'> <button >Add New Property</button> </Link>
            </div>
        )
    }
}