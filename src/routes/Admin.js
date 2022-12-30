import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Notice from '../components/Notice';
import Project from '../components/Project';
import Comment from '../components/Comment';
import Campaign from '../components/Campaign';

function Admin() {
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setPage(window.location.pathname.substring(1));
        setLoading(true);
    }, []);
    return (
        <>
            {loading && (
                <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                    <Sidebar focus={page} />
                    <div className="w-7/12 mx-auto">
                        {page === 'notice' && <Notice />}
                        {page === 'project' && <Project />}
                        {page === 'comment' && <Comment />}
                        {page === 'campaign' && <Campaign />}
                    </div>
                </div>
            )}
        </>
    );
}
export default Admin;
