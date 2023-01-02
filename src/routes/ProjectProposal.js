import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SubSidebar from '../components/SubSidebar';
import ProjectProposalList from '../components/admin/project/ProjectProposalList';

function ProjectProposal() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="project" />
                <SubSidebar subject="proposal" />
                <div className="w-9/12 mx-auto pt-20 px-3">
                    <div className="flex pb-2 mb-2 border-b text-center tracking-wider">
                        <div className="w-1/4 tracking-wider">제목</div>
                        <div className="w-1/4 tracking-wider">단체명</div>
                        <div className="w-1/4 tracking-wider">상태</div>
                        <div className="w-1/4 tracking-wider">신청일</div>
                    </div>
                    <div>
                        <ProjectProposalList status="fail" />
                        <ProjectProposalList status="fail" />
                        <ProjectProposalList status="fail" />
                        <ProjectProposalList status="fail" />
                        <ProjectProposalList status="fail" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProjectProposal;
