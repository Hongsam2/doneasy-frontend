import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import SubSidebar from '../../components/admin/SubSidebar';

function ProjectProposalDetail() {
    const [id, setId] = useState(-1);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [goal, setGoal] = useState(0);
    const [createdDate, setCreatedDate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [nickname, setNickname] = useState('');
    const [status, setStatus] = useState('');
    const [contents, setContents] = useState([]);
    const location = useLocation();
    useEffect(() => {
        setId(location.pathname.substring(31));
    }, []);

    useEffect(() => {
        if (id !== -1) {
            axios
                .get(`http://localhost:8080/admin/projectproposal/detail/${id}`)
                .then((response) => {
                    console.log(response);
                    setTitle(response.data.title);
                    setCategory(response.data.category);
                    setStartDate(response.data.startDate.substring(0, 10));
                    setEndDate(response.data.endDate.substring(0, 10));
                    setGoal(response.data.goal);
                    setCreatedDate(response.data.createdDate.substring(0, 10));
                    setDeadline(response.data.deadline.substring(0, 10));
                    setNickname(response.data.organizationName);
                    setStatus(response.data.status);
                    setContents();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="project" />
                <SubSidebar subject="project" />
                <div className="w-9/12 mx-auto pt-20 px-3">
                    <div className="text-center">
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            제목: {title}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            카테고리: {category}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            사업 시작: {startDate}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            사업 종료: {endDate}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            목표 금액: {goal}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            신청일: {createdDate}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            마감: {deadline}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            단체명: {nickname}
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            상태: {status}
                        </div>
                        <div className="text-red-900 text-9xl">{contents}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProjectProposalDetail;
