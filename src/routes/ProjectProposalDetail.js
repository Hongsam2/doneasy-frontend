import Sidebar from '../components/Sidebar';
import SubSidebar from '../components/SubSidebar';

function ProjectProposalDetail() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="project" />
                <SubSidebar subject="project" />
                <div className="w-9/12 mx-auto pt-20 px-3">
                    <div className="text-center">
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            제목
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            카테고리
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            시작 예정일
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            종료 예정일
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            목표 금액
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            신청일
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            마감기한
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            단체
                        </div>
                        <div className="mb-8 text-2xl tracking-wider text-gray-700">
                            상태
                        </div>
                        <div className="text-red-900 text-9xl">본문</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProjectProposalDetail;
