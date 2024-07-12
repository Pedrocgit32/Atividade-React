
import './App.css';
// import TodoList from './components/TodoList';
// import Contador from './components/Contador';
// import Texto from './components/Texto';
import { ToggleTheme } from './context/TemaContext';
import Tema from './components/Tema';


function App() {
    return (

        <div className="App">
          <ToggleTheme>
            <Tema />
          </ToggleTheme>      
        </div>

    );
}

export default App;
