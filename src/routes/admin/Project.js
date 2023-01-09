import { useEffect, useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import SubSidebar from '../../components/admin/SubSidebar';
import ProjectList from '../../components/admin/project/ProjectList';
import axios from 'axios';

function Project() {
    const [text, setText] = useState('');
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [contents]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/project')
            .then((response) => {
                setContents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const onSearchChange = (e) => {
        setText(e.target.value);
    };
    const onEnterKeyDown = (e) => {
        if (e.code === 'Enter') {
            onSubmitClick();
        }
    };
    const onSubmitClick = () => {
        if (text !== '') {
            axios
                .get(`http://localhost:8080/admin/project?s=${text}`)
                .then((response) => {
                    console.log(response.data);
                    setContents(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="project" />
                <SubSidebar subject="project" />
                <div className="w-9/12 mx-auto pt-20 px-3">
                    <div>
                        <div>
                            <div className="flex pb-2 mb-2 border-b text-center tracking-wider">
                                <div className="w-3/12 tracking-wider">
                                    프로젝트 명
                                </div>
                                <div className="w-2/12 tracking-wider">
                                    단체명
                                </div>
                                <div className="w-2/12 tracking-wider">
                                    계좌번호
                                </div>
                                <div className="w-2/12 tracking-wider">
                                    직접기부액
                                </div>
                                <div className="w-2/12 tracking-wider">
                                    참여기부액
                                </div>
                                <div className="w-1/12 tracking-wider">
                                    상태
                                </div>
                                <div className="w-1/12 tracking-wider">
                                    마감일
                                </div>
                            </div>
                            <div>
                                {loading &&
                                    contents.map((value) => {
                                        return (
                                            <ProjectList
                                                value={value}
                                                key={value.id}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="border-t py-2 my-6 text-center border-gray-300">
                            <input
                                type="text"
                                placeholder="제목을 입력해주세요."
                                className="rounded-2xl bg-gray-100 px-3 mr-3"
                                onChange={onSearchChange}
                                value={text}
                                onKeyDown={onEnterKeyDown}
                            />
                            <button
                                className="bg-gray-100 px-1 py-0.5 tracking-wider rounded-md duration-150 hover:bg-gray-200 hover:duration-150"
                                onClick={onSubmitClick}
                            >
                                검색
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Project;
