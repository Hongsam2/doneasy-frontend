import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SubSidebar from '../components/SubSidebar';

function Project() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="project" />
                <SubSidebar subject="project" />
                <div className="w-9/12 mx-auto pt-20 bg-gray-100">
                    <div className="bg-gray-500">This is Project</div>
                </div>
            </div>
        </>
    );
}
export default Project;
