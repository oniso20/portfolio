import './App.css';
import Projects from './pages/projects/Projects';
import Readme from './component/Readme';

function App() {
  return (
    <div>
      <h1>React Portfolio</h1>
      <Readme repoName="my-repo" />
      <Projects />
    </div>
  );
}

export default App;
