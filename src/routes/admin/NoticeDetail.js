import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DetailContent from '../../components/admin/notice/DetailContent';
import Sidebar from '../../components/admin/Sidebar';

// Modify ???
function NoticeDetail() {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setLoading(true);
    }, [content]);
    useEffect(() => {
        setId(Number.parseInt(location.pathname.substring(21)));
        axios
            .get(
                `http://localhost:8080/admin/notice/detail/${location.pathname.substring(
                    21
                )}`
            )
            .then((response) => {
                console.log(response);
                setTitle(response.data.title);
                setContent(response.data.contentOfNoticeDetailDtoList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onDeleteClick = () => {
        axios
            .delete(`http://localhost:8080/admin/notice/delete/${id}`)
            .then((response) => {
                console.log(response);
                window.location.href = '/admin/notice';
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-7/12 mx-auto pt-20">
                    <div className="text-right">
                        <button
                            className="rounded-lg bg-red-100 px-3 py-1.5 mr-4 tracking-wider duration-150 hover:bg-red-200 hover:duration-150"
                            onClick={onDeleteClick}
                        >
                            삭제
                        </button>
                        {/* <Link to={`/admin/notice/${id}/modify`}>
                            <button className="rounded-lg bg-lime-100 px-3 py-1.5 tracking-wider duration-150 hover:bg-lime-200 hover:duration-150">
                                수정
                            </button>
                        </Link> */}
                    </div>
                    <div className="border-t-2 border-b py-5 text-center tracking-wider text-4xl my-2 mt-3">
                        {title}
                    </div>
                    <div>
                        {loading &&
                            content.map((value) => {
                                return (
                                    <DetailContent
                                        value={value}
                                        key={value.index}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeDetail;
