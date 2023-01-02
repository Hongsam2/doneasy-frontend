
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './routes/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
