import React,{Component} from 'react';
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'
import {Switch,Route,Link} from 'react-router-dom'



export default class Wizard extends Component{
    render(){
        return(
            <div>
                <Link style={{textDecoration:'none'}} to='/'> <h1>Add New Listing</h1> </Link> 
                <Switch>
                    <Route exact path='/wizard/step1' component={StepOne}/>
                    <Route exact path='/wizard/step2' component={StepTwo}/>
                    <Route exact path='/wizard/step3' component={StepThree}/>
                </Switch>
                        
            </div>
        )
    }
}