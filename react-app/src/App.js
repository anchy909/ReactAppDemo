import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './containers/SignInPage/SignInPage';
import ProjectPage from './containers/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/projects" element={<ProjectPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
