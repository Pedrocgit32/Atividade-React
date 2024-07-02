import './App.css';
import TodoList from './components/TodoList';
import ReactDOM from 'react-dom';

function App() {
  
  
  return (
    <div className="App">
      ReactDOM.render(<TodoList/>, document.getElementById('root'));
    </div>
  );
}

export default App;
