import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonatingPost from './routes/DonatingPost'
import TestTemplate from './routes/TestTemplate'
import SignUpPersonal from './routes/SignUpPersonal'
import SelectSignUp from './routes/SelectSignUp';

function App() {
  return (
            <BrowserRouter>
              <Routes >
                <Route path={'/'} element={<SignUpPersonal/>}/>
              </Routes>
            </BrowserRouter>
        

  );
}

export default App;
