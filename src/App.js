import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Notice from './routes/admin/Notice';
// import NoticeCreate from './routes/admin/NoticeCreate';
// import Project from './routes/admin/Project';
// import Comment from './routes/admin/Comment';
// import Campaign from './routes/admin/Campaign';
// import NoticeDetail from './routes/admin/NoticeDetail';
// import ProjectProposal from './routes/admin/ProjectProposal';
// import ProjectProposalDetail from './routes/admin/ProjectProposalDetail';
// import NoticeModify from './routes/admin/NoticeModify';
import Main from './routes/3indy/Main';
import Header from './components/3indy/layouts/Header';
import Footer from './components/3indy/layouts/Footer';
import Login from './routes/3indy/Login';
import DonatingPost from './routes/hong/DonatingPost';
import DonatedPost from './routes/hong/DonatedPost';
import Intro from './routes/3indy/Intro';
import MyPage from './routes/3indy/MyPage';
import GroupPage from './routes/3indy/GroupPage';
import Notice from './routes/3indy/Notice';
import Join from './routes/3indy/Join';
import SignUpPersonal from './routes/hong/SignUpPersonal';
import SignUpOrganization from './routes/hong/SignUpOrganization';
import ProjectDetail from './routes/rnjsrlgur/ProjectDetail';
import ProjectReviewDetail from './routes/rnjsrlgur/ProjectReviewDetail';
import ProjectProposalWrite from './routes/daniel/ProjectProposalWrite';
import ProjectReviewWrite from './routes/daniel/ProjectReivewWrite';
import ModifyPersonal from './routes/hong/ModifyPersonal';
import ModifyOrganization from './routes/hong/ModifyOrganization';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* MAIN */}
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/notice" element={<Notice />} />

                {/* USER */}
                <Route path="/join/personal" element={<SignUpPersonal />} />
                <Route path="/join/group" element={<SignUpOrganization />} />
                <Route path="/profile/personal" element={<MyPage />} />
                <Route path="/profile/group" element={<GroupPage />} />
                <Route
                    path="/profile/personal/modify"
                    element={<ModifyPersonal />}
                />
                <Route
                    path="/profile/group/modify"
                    element={<ModifyOrganization />}
                />
                <Route path="/donate-list" element={<DonatingPost />} />

                {/* PROJECT */}
                <Route path="/project" element={<DonatingPost />} />
                <Route path="/project-review" element={<DonatedPost />} />
                <Route path="/project/detail/:id" element={<ProjectDetail />} />
                <Route
                    path="/project-review/detail/:id"
                    element={<ProjectReviewDetail />}
                />
                <Route
                    path="/project/post"
                    element={<ProjectProposalWrite />}
                />
                <Route
                    path="project-review/post"
                    element={<ProjectReviewWrite />}
                />

                {/* ADMIN */}
                {/* <Route path="/" element={<Notice />} />
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
                <Route path="/admin/campaign" element={<Campaign />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
