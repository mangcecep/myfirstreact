import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App.css';
import Card from './components/components/Card';
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

//     changeColor = () => {
//         this.setState({color: "blue"});
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
//             <button type="button" onClick={this.changeColor}>
//                 Change Color
//             </button>
//         </div>
//         );
//     }
// }

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {favoritecolor: "red"};
//     }

//     static getDerivedStateFromProps(props, state){
//         return {favoritecolor: props.favcol};
//     }

//     render(){
//         return (
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {favoritecolor: "red"};
//     }

//     componentDidMount(){
//         setTimeout( () => {
//             this.setState({favoritecolor: "yellow"})
//         }, 1000 )
//     }

//     render(){
//         return (
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// class  MyForm extends React.Component {
//     render() {
//         return (
//             <form>
//                 <h1>Hello</h1>
//                 <p>Enter Your Name : </p>
//                 <input 
//                     type="text"
//                 />
//             </form>
//         );
//     }
// }

// class MyForm extends React.Component {
//     constructor(props) {
//             super(props) ;
//             this.state =  {username: ''};
//         }

//         myChangeHandler = (event) => {
//             this.setState({username: event.target.value});
//         }

//         render(){
//             return(
//                 <form>
//                     <h1>Hello {this.state.username}</h1>
//                     <p>Enter your name :</p>

//                     <input 
//                         type='tect'
//                         onChange={this.myChangeHandler}
//                     />
//                 </form>
//             );
        
//          }
//     }

// class Myform extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username : ''};
//     }

//     myChangeHandler = (event) => {
//         this.setState({username: event.target.value});
//     }

//     render() {
//         let header = '';
//         if(this.state.username){
//             header = <h1>Hello {this.state.username}</h1>;
//         } else {
//             header = '';
//         }

//         return (
//             <form>
//                 {header}
//                 <p>Enter your name :</p>
//                 <input
//                     type='text'
//                     onChange={this.myChangeHandler}
//                 />
//             </form>
//         );
//     }
// }

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: '' };
//     }

//     mySubmitHandler = (event) => {
//         event.preventDefault();
//         alert("You are submitting " + this.state.username);
//     }

//     myChangeHandler = (event) => {
//         this.setState({username: event.target.value});
//     }

//     render(){
//         return (
//             <form onSubmit={this.mySubmitHandler}>
//                 <h1>Hello {this.state.username}</h1>
//                 <p>Enter your name, and submit:</p>

//                 <input
//                     type='text'
//                     onChange={this.myChangeHandler}
//                 />

//                 <input
//                     type='submit'
//                 />
//             </form>
//         );
//     }
// }

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             age: null,
//         };
//     }

//     myChangeHandler = (event) => {
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({[nam] : val});
//     }

//     render(){
//         return (
//             <form>
//                 <h1>Hello {this.state.username} {this.state.age}</h1>
//                 <p>Enter your Name: </p>

//                 <input
//                     type='tect'
//                     name='username'
//                     onChange={this.myChangeHandler}
//                 />
//                 <p>Enter your age : </p>
//                 <input
//                     type='text'
//                     name='age'
//                     onChange={this.myChangeHandler}
//                 />
//             </form>
//         );
//     }
// }

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props) ;
//             this.state = {
//                 username: '',
//                 age: null,
//             };
//         }

//         myChangeHandler = (event) => {
//             let nam = event.target.name;
//             let val = event.target.value;
//             if(nam === "age") {
//                 if (!Number(val)) {
//                     alert("Your age must be a number");
//                 }
//             }
//             this.setState({[nam] : val})
//         }

//         render() {
//             return (
//                 <form>
//                     <h1>Hello {this.state.username} {this.state.age}</h1>
//                     <p>Enter your name:</p>
//                     <input
//                         type = 'text'
//                         name = 'username'
//                         onChange={this.myChangeHandler}
//                     />
//                     <p>Enter your age:</p>
//                     <input
//                         type='text'
//                         name = 'age'
//                         onChange={this.myChangeHandler}
//                     />
//                 </form>
//             );
//         }

//     }

class MyForm extends React.Component {
    constructor(props) {
        super(props) ;
            this.state = {
                username: '',
                age: null,
                errormessage: ''
            };
        }

        myChangeHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            let err = '';
            if (nam === "age") {
                if(val !="" && !Number(val)){
                    err = <strong>Your age must be a number</strong>
                }
            }
            this.setState({errormessage: err})
            this.setState({[nam] : val})
        }

        render() {
            return (
                <form>
                    <h1>Hello {this.state.username} {this.state.age}</h1>
                    <p>Enter your name:</p>
                    <input
                        type = 'text'
                        name = 'username'
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name = 'age'
                        onChange={this.myChangeHandler}
                    />

                    {this.state.errormessage}
                </form>
            );
        }

    }


ReactDOM.render(<MyForm />, document.getElementById('root'));
// ReactDOM.render(<Card />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
