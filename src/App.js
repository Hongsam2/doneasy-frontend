
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './routes/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Project/>}/>
        <Route path='/project/:projectId' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
