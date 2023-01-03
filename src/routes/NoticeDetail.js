import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Content from '../components/admin/notice/Content';
import Sidebar from '../components/Sidebar';

function NoticeDetail() {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const location = useLocation();
    useEffect(() => {
        setId(location.pathname.substring(21));
        console.log(id);
        console.log(location);
        axios
            .get(
                `http://localhost:8080/admin/notice/detail/${location.pathname.substring(
                    21
                )}`
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-7/12 mx-auto pt-20">
                    <div className="text-right">
                        <button className="rounded-lg bg-red-100 px-3 py-1.5 mr-4 tracking-wider duration-150 hover:bg-red-200 hover:duration-150">
                            삭제
                        </button>
                        {/* <Link
                            to={`/admin/notice/${id}/modify`}
                            state={{ title: title }}
                        >
                            <button className="rounded-lg bg-lime-100 px-3 py-1.5 tracking-wider duration-150 hover:bg-lime-200 hover:duration-150">
                                수정
                            </button>
                        </Link> */}
                    </div>
                    <div className="border-t py-2 text-center tracking-wider text-4xl my-2">
                        title
                    </div>
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeDetail;
