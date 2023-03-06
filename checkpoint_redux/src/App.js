 
import './App.css';
import EditTask from './components/tasks/EditTask';
import AddTask from './components/tasks/AddTask';
import TaskList from './components/tasks/TaskList';

function App() {
  return (
    <div className="App">
    <AddTask/>
    <TaskList/>
    
    <EditTask/>
    </div>
  );
}

export default App;
