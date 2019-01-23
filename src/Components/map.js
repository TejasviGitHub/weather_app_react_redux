import React, {Component} from 'react';

export default class map extends Component{
    //comonent lifecycle method
    //ref--gives reference to the element//here to display google map in div
    componentDidMount(){  
        const google=window.google;
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });      
    }
    render(){
        return <div ref="map" />;
    }
}