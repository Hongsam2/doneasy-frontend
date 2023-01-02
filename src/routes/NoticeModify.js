import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Content from '../components/admin/notice/Content';
import Sidebar from '../components/Sidebar';

function NoticeModify() {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        setTitle(location.state.title);
    }, []);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-7/12 mx-auto pt-20">
                    <div className="text-right">
                        <button className="rounded-lg bg-red-100 px-3 py-1.5 mr-4 tracking-wider duration-150 hover:bg-red-200 hover:duration-150">
                            삭제
                        </button>
                        <button className="rounded-lg bg-lime-100 px-3 py-1.5 tracking-wider duration-150 hover:bg-lime-200 hover:duration-150">
                            완료
                        </button>
                    </div>
                    <div className="border-t py-2 text-center tracking-wider text-4xl my-2">
                        <input
                            type="text"
                            value={title}
                            onChange={onTitleChange}
                            className="border"
                        />
                    </div>
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeModify;
