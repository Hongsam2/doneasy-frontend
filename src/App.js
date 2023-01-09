
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './routes/Project';
import ProjectReview from './routes/ProjectReview';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Project/>}/>
        <Route path='/project/:projectId' element={<Project/>}/>
        <Route path='/project-review/:projectId' element={<ProjectReview />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
