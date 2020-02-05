import React from 'react'

// export default class Employee extends React.Component{
//     render() {
//         return ( 
//            <div>
//                <h1>{this.props.name}</h1>
//                <p>{this.props.email}</p>
//            </div>
//         );
//     }
// }


export default function  employee(props){
   
        return (
           <div>
               <h1>{props.name}</h1>
               <p>{props.email}</p>
           </div>);
        
        }

// const employee = (props)=>{
//     return ( 
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.email}</p>
//         </div>
//      );
// }
// export default employee;