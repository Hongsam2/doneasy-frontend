import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/:page" element={<Admin />} />
                <Route path="/:page/:subtitle" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
