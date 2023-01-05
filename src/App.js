import Main from './routes/Main';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import IndiJoin from './routes/IndiJoin';
import GroupJoin from './routes/GroupJoin';
import Join from './routes/Join';
import Notice from './routes/Notice';
import Intro from './routes/Intro';
import Search from './routes/Search';
import MyPage from './routes/MyPage';
import GroupPage from './routes/GroupPage';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/routes/Login" element={<Login/>}></Route>
        <Route path="/routes/Join" element={<Join/>}></Route>
        <Route path="/routes/IndiJoin" element={<IndiJoin/>}></Route>
        <Route path="/routes/GroupJoin" element={<GroupJoin/>}></Route>
        <Route path="/routes/Intro" element={<Intro/>}></Route>
        <Route path="/routes/Notice" element={<Notice/>}></Route>
        <Route path="/routes/Search" element={<Search/>}></Route>
        <Route path="/routes/MyPage" element={<MyPage/>}></Route>
        <Route path="/routes/GroupPage" element={<GroupPage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;