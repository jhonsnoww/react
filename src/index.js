import React from 'react'
import ReactDOM from 'react-dom'
import Employee from './components/employee'



// var component1 = React.createElement('li', null, "hello world");

// var component2 = React.createElement("ul", null, component1);

// ReactDOM.render(component2, document.getElementById('root'));

class ShowCase extends React.Component{
    render(){
      return  <div>
            <Employee name = "Su Su" email="susu@gmail.com"/>
            <Employee name = "Mg Mg" email="mgmg@gmail.com"/>
        </div>
    }
}

ReactDOM.render( < ShowCase / > , document.getElementById('root'));