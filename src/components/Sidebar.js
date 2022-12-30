import { useEffect, useState } from 'react';
import SubSidebar from './SubSidebar';

function Sidebar({ focus }) {
    const [page, setPage] = useState('');
    useEffect(() => {
        setPage(focus);
    }, []);
    const onbtnClick = (e) => {
        window.location.href = `/${e.target.textContent.toLowerCase()}`;
    };
    return (
        <>
            <div className="w-1/6 h-screen border-r mr-2 pt-20">
                <button
                    className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                        page === 'notice' ? 'text-gray-700 text-xl' : ''
                    }`}
                    onClick={onbtnClick}
                >
                    Notice
                </button>
                <button
                    className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                        page === 'project' ? 'text-gray-700 text-xl' : ''
                    }`}
                    onClick={onbtnClick}
                    id="project"
                >
                    Project
                </button>
                <button
                    className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                        page === 'comment' ? 'text-gray-700 text-xl' : ''
                    }`}
                    onClick={onbtnClick}
                >
                    Comment
                </button>
                <button
                    className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                        page === 'campaign' ? 'text-gray-700 text-xl' : ''
                    }`}
                    onClick={onbtnClick}
                >
                    Campaign
                </button>
            </div>
            {focus !== 'notice' && <SubSidebar subject={focus} />}
        </>
    );
}
export default Sidebar;
