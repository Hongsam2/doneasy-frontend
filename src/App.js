
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contents from './routes/Contents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Contents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
