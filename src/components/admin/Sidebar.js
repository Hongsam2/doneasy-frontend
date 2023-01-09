import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ focus }) {
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log(focus);
        setPage(focus);
        setLoading(true);
    }, []);
    const onNoticeClick = () => {
        window.location.href = `/admin/notice`;
    };
    const onProjectClick = () => {
        window.location.href = `/admin/project`;
    };
    const onCampaignClick = () => {
        window.location.href = `/admin/campaign`;
    };
    const onCommentClick = () => {
        window.location.href = `/admin/comment`;
    };
    return (
        <>
            {loading && (
                <div className="w-1/6 h-screen border-r mr-2 pt-20">
                    <button
                        className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                            page === 'notice' ? 'text-gray-700 text-xl' : ''
                        }`}
                        onClick={onNoticeClick}
                    >
                        Notice
                    </button>
                    <button
                        className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                            page === 'project' ? 'text-gray-700 text-xl' : ''
                        }`}
                        id="project"
                        onClick={onProjectClick}
                    >
                        Project
                    </button>
                    <button
                        className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                            page === 'campaign' ? 'text-gray-700 text-xl' : ''
                        }`}
                        onClick={onCampaignClick}
                    >
                        Campaign
                    </button>
                    <button
                        className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                            page === 'comment' ? 'text-gray-700 text-xl' : ''
                        }`}
                        onClick={onCommentClick}
                    >
                        Comment
                    </button>
                </div>
            )}
        </>
    );
}
export default Sidebar;
