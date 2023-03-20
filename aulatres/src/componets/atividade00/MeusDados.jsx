//function
// function meusDados() {
//     return (
//         <div>
//             <h1>Samuel Nascimento</h1>
//             <h1>Sistemas de Informação</h1>
//             <h1>Universidade Federal do Ceará - Campus Quixadá</h1>
//         </div>
//     )
// }

import { Component } from "react";

//arrow function with return
// const meusDados = () => {
//     return (
//         <div>
//             <h1>Samuel Nascimento</h1>
//             <h1>Sistemas de Informação</h1>
//             <h1>Universidade Federal do Ceará - Campus Quixadá</h1>
//         </div>
//     )
// }

//arrow function no return
// const meusDados = () => 
// <div>
//     <h1>Samuel Nascimento</h1>
//     <h1>Sistemas de Informação</h1>
//     <h1>Universidade Federal do Ceará - Campus Quixadá</h1>
// </div>

//Classes
class meusDados extends Component {
    render() {
        return <div>
            <h1>Samuel Nascimento</h1>
            <h1>Sistemas de Informação</h1>
            <h1>Universidade Federal do Ceará - Campus Quixadá</h1>
        </div>
    }
}


export default meusDados;