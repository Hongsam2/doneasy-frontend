import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notice from './routes/Notice';
import NoticeCreate from './routes/NoticeCreate';
import Project from './routes/Project';
import Comment from './routes/Comment';
import Admin from './routes/Admin';
import Campaign from './routes/Campaign';
import NoticeDetail from './routes/NoticeDetail';
import ProjectProposal from './routes/ProjectProposal';
import ProjectProposalDetail from './routes/ProjectProposalDetail';
import NoticeModify from './routes/NoticeModify';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notice />} />
                <Route path="/admin" element={<Notice />} />
                <Route path="/admin/notice" element={<Notice />} />
                <Route path="/admin/notice/create" element={<NoticeCreate />} />
                <Route
                    path="/admin/notice/detail/:id"
                    element={<NoticeDetail />}
                />
                <Route
                    path="/admin/notice/:id/modify"
                    element={<NoticeModify />}
                />
                <Route path="/admin/project" element={<Project />} />
                <Route
                    path="/admin/project/proposal"
                    element={<ProjectProposal />}
                />
                <Route
                    path="/admin/project/proposal/detail/:id"
                    element={<ProjectProposalDetail />}
                />
                <Route path="/admin/comment" element={<Comment />} />
                <Route path="/admin/campaign" element={<Campaign />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
