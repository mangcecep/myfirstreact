import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App.js';
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

// class Car extends React.Component{
//     render(){
//         return <h2>I am a {this.props.brand}!</h2>
//     }
// }

// const myelement = <Car brand="Ford" />

// class Card extends React.Component{
//     render(){
//         return <h1>ini Card</h1>
//     }
// }

// class Myheader extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
//                 <p>add a little style!</p>
//             </div>
//         );
//     }
// }

// class Myheader extends React.Component{
//     render (){
//     //     const mystyle = {
//     //         color : "white",
//     //         backgroundColor: "DodgerBlue",
//     //         padding : "10px",
//     //         fontFamily : "Arial"
//     //     }

//         return (
//             <div>
//                 <h1>Hello Style!</h1>
//                 <p>add a little style!</p>
//             </div>
//         )
//     }
// }

// class Car extends React.Component{
//     render (){
//         return <h2>I am a {this.props.brand}!</h2>
//     }
// }

// const myelement = <Car brand="Ford" />

// class Car extends React.Component{
//     render (){
//         return <h2>I am a {this.props.brand}!</h2>
//     }
// }

// class Garage extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Whi lives in my garage?</h1>
//                 <Car brand="Ford" />
//             </div>
//         );
//     }
// }

// class Car extends React.Component{
//     render (){
//         return <h2>I am a {this.props.brand}!</h2>
//     }
// }

// class Garage extends React.Component {
//     render() {
//         const carname =  "Ford";
//         return (
//             <div>
//                 <h1>Who live in my garage?</h1>
//                 <Car brand={carname} />
//             </div>
//         );
//     }
// }

// class Car extends React.Component {
//     render(){
//         return <h2>I am a {this.props.brand.name}!</h2>
//     }
// }

// class Garage extends React.Component {
//     render(){
//         const carinfo = {name : "Ford", model: "Mustang"};
//         return(
//             <div>
//                 <h1>Who lives in my garage?</h1>
//                 <Car brand={carinfo}/>
//             </div>

//         );
//     }
// }

// class Car extends React.Component {
//     constructor (props) {
//         super (props);
//     }

//     render(){
//     return <h2>I am a {this.props.model} !</h2>
//     }
// }

// class Car extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             brand : "Ford",
//             model : "Mustang",
//             color : "red",
//             year : 1964
//         };
//     }

//     render(){
//     return (
//         <div>
//             <h1>My {this.state.brand}</h1>
//             <p>
//                 it is a {this.state.color} <br />
//                 {this.state.model} <br />
//                 from {this.state.year}.
//             </p>
//         </div>
//         );
//     }
// }

class Car extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            brand : "Ford",
            model : "Mustang",
            color : "red",
            year : 1964
        };
    }

    changeColor = () => {
        this.setState({color: "blue"});
    }

    render(){
    return (
        <div>
            <h1>My {this.state.brand}</h1>
            <p>
                it is a {this.state.color} <br />
                {this.state.model} <br />
                from {this.state.year}.
            </p>
            <button type="button" onClick={this.changeColor}>
                Change Color
            </button>
        </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
