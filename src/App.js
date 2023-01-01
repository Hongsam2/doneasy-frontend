import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notice from './routes/Notice';
import NoticeCreate from './routes/NoticeCreate';
import Project from './routes/Project';
import Comment from './routes/Comment';
import Admin from './routes/Admin';
import Campaign from './routes/Campaign';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notice />} />
                <Route path="/admin" element={<Notice />} />
                <Route path="/admin/notice" element={<Notice />} />
                <Route path="/admin/notice/create" element={<NoticeCreate />} />
                <Route path="/admin/project" element={<Project />} />
                <Route path="/admin/comment" element={<Comment />} />
                <Route path="/admin/campaign" element={<Campaign />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
