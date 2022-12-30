import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonatingPost from '/routes/DonatingPost'


function App() {
  return (
            <BrowserRouter>
              <Routes >
                <Route path={'/'} element={<DonatingPost/>}/>
              </Routes>
            </BrowserRouter>

  );
}

export default App;
