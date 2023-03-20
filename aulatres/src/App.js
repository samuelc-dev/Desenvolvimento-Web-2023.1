import logo from './logo.svg';
import './App.css';
import MeusDados2 from './componets/atividade00/MeusDados2';
import Temperatura from './componets/atividade00/Temperatura';

// function App() {
//   return (
//     <div className='App'>
//       <MeusDados/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <MeusDados2
//         nome = 'Samuel Nascimento'
//         curso = 'Sistemas de Informação'
//         universidade = 'Universidade Federal do Ceará'
//       />
//     </div>
//   );
// }

function App() {
  return (
    <div className='App'>
      <Temperatura/>
    </div>
  );
}

export default App;
