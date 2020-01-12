import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';

class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}
//self note --- Export The Main Component
export default Main;