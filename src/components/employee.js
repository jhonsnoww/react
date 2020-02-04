import React from 'react'

export default class Employee extends React.Component{
    render() {
        return ( 
           <div>
               <h1>{this.props.name}</h1>
               <p>{this.props.email}</p>
           </div>
        );
    }
}