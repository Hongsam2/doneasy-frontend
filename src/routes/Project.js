import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SubSidebar from '../components/SubSidebar';
import ProjectList from '../components/admin/project/ProjectList';

function Project() {
    const [searchValue, setSearchValue] = useState('');

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
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
                                <ProjectList status="done" />
                                <ProjectList status="done" />
                                <ProjectList status="done" />
                                <ProjectList status="done" />
                                <ProjectList status="done" />
                                <ProjectList status="done" />
                            </div>
                        </div>
                        <div className="border-t py-2 my-2 text-center">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요."
                                value={searchValue}
                                onChange={onSearchValueChange}
                                className="rounded-md border px-2 mr-2"
                            />
                            <button className="rounded-lg tracking-wider px-3 py-1.5 bg-gray-50 duration-150 hover:bg-gray-200 hover:duration-150">
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
