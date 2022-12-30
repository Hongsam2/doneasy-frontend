import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './routes/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Table/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
