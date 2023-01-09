import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notice from './routes/admin/Notice';
import NoticeCreate from './routes/admin/NoticeCreate';
import Project from './routes/admin/Project';
import Comment from './routes/admin/Comment';
import Campaign from './routes/admin/Campaign';
import NoticeDetail from './routes/admin/NoticeDetail';
import ProjectProposal from './routes/admin/ProjectProposal';
import ProjectProposalDetail from './routes/admin/ProjectProposalDetail';
import NoticeModify from './routes/admin/NoticeModify';

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
