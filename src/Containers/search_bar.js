import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../Actions/index';
class search_bar extends Component{
    constructor(props){
        super(props);

        this.state={term:''};
        this.onFormSubmit=this.onFormSubmit.bind(this);
        //this.onInputChange=this.onInputChange.bind(this);
    }
    /*event-handler - call-back function
    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }*/

    onFormSubmit(event){
        //usually form element onsubmitting or on refreshing it makes the post request..
        //instead we want to avaoid calling post request since we are assuming this as a single page application.
        event.preventDefault();
        //preventDefault() helps to stop making post request and it doesn't refresh the conentents on reloading.

        //Go and search for weather data.
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="col-md-12 input-group">
                    <input 
                    placeholder="get 5 days weather forecast for your favourite cities"
                    value={this.state.term}
                    onChange={(e)=>{console.log(e.target.value);this.setState({term:e.target.value})}}
                    className="form-control"/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDisptachToProps)(search_bar);