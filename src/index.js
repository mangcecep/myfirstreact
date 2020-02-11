import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const mysFirstElemennt = <h1>Hello React!</h1>
// const myelement = (
//     <table>
//         <tr>
//             <th>Name</th>
//         </tr>
//         <tr>
//             <td>John</td>
//         </tr>
//         <tr>
//             <td>Elsa</td>
//         </tr>
//     </table>
// );

// //use JSX

// const myelement = <h1>I love JSX!</h1>

//use non-JSX

// const myelement = React.createElement('h1', {}, 'I dont use JSX!');
// expression in JSX
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>

// insert a large block HTML
// const myelement = (
//     <ul>
//         <li>Apples</li>
//         <li>Bananas</li>
//         <li>Cherries</li>
//     </ul>
// );

//one Top Level Element
// const myelement = (
//     <div>
//         <h1>I am a Header.</h1>
//         <h1>I am a Header too.</h1>
//     </div>
// );

// element Must be CLose -> close empty element with /> if not that is error 
// i.e :

//const myelement = <input type="text">

//it's mus be like this: 
// const myelement = <input type="text"/>

// function Car(){
//     return <h2>Hi, I am also a Car!</h2>
// }

// class Car extends React.Component{
//     constructor(){
//         super();
//         this.state = {color: "red"};
//     }

//     render(){
//     return <h2>I am a {this.state.color} Car!</h2>
//     }
// }

// class Car extends React.Component{
//     render() {
//         return <h2>I am a {this.props.color} Car!</h2>
//     }
// }

// class Car extends React.Component{
//     render() {
//         return <h2>I am a Car!</h2>
//     }
// }

// class Garage extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>Who lives in my Garage?</h1>
//                 <Car />
//             </div>
//         );
//     }
// }

class Car extends React.Component{
    render(){
        return <h2>I am a {this.props.brand}!</h2>
    }
}

const myelement = <Car brand="Ford" />

ReactDOM.render(myelement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
