import Main from './routes/3indy/Main';
import Header from './components/3indy/layouts/Header'
import Footer from './components/3indy/layouts/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routes/3indy/Login';
import IndiJoin from './routes/3indy/IndiJoin';
import GroupJoin from './routes/3indy/GroupJoin';
import Join from './routes/3indy/Join';
import Notice from './routes/3indy/Notice';
import Intro from './routes/3indy/Intro';
import Search from './routes/3indy/Search';
import MyPage from './routes/3indy/MyPage';
import GroupPage from './routes/3indy/GroupPage';
import Donation from './routes/3indy/Donation';

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/routes/3indy/Login" element={<Login/>}></Route>
        <Route path="/routes/3indy/Join" element={<Join/>}></Route>
        <Route path="/routes/3indy/IndiJoin" element={<IndiJoin/>}></Route>
        <Route path="/routes/3indy/GroupJoin" element={<GroupJoin/>}></Route>
        <Route path="/routes/3indy/Intro" element={<Intro/>}></Route>
        <Route path="/routes/3indy/Notice" element={<Notice/>}></Route>
        <Route path="/routes/3indy/Search" element={<Search/>}></Route>
        <Route path="/routes/3indy/MyPage" element={<MyPage/>}></Route>
        <Route path="/routes/3indy/GroupPage" element={<GroupPage/>}></Route>
        <Route path='/routes/3indy/Donation' element={<Donation/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;