import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ focus }) {
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setPage(focus);
        setLoading(true);
    }, []);
    return (
        <>
            {loading && (
                <div className="w-1/6 h-screen border-r mr-2 pt-20">
                    <Link to="/admin/notice">
                        <button
                            className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                                page === 'notice' ? 'text-gray-700 text-xl' : ''
                            }`}
                        >
                            Notice
                        </button>
                    </Link>
                    <Link to="/admin/project">
                        <button
                            className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                                page === 'project'
                                    ? 'text-gray-700 text-xl'
                                    : ''
                            }`}
                            id="project"
                        >
                            Project
                        </button>
                    </Link>
                    <Link to="/admin/comment">
                        <button
                            className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                                page === 'comment'
                                    ? 'text-gray-700 text-xl'
                                    : ''
                            }`}
                        >
                            Comment
                        </button>
                    </Link>
                    <Link to="/admin/campaign">
                        <button
                            className={`py-4 my-4 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-xl duration-150 block mx-auto tracking-wider ${
                                page === 'campaign'
                                    ? 'text-gray-700 text-xl'
                                    : ''
                            }`}
                        >
                            Campaign
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
}
export default Sidebar;
