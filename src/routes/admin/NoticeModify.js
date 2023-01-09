import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModifyContent from '../../components/admin/notice/modify/ModifyContent';
import Sidebar from '../../components/admin/Sidebar';

//TODO
function NoticeModify() {
    const [id, setId] = useState(-1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
    }, [content]);

    useEffect(() => {
        if (id !== -1) {
            axios
                .get(`http://localhost:8080/admin/notice/detail/${id}`)
                .then((response) => {
                    console.log(response);
                    setTitle(response.data.title);
                    setContent(response.data.contentOfNoticeDetailDtoList);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    useEffect(() => {
        const id = Number.parseInt(location.pathname.substring(14, 15));
        setId(id);
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
                        {loading &&
                            content.map((value) => {
                                return (
                                    <ModifyContent
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
export default NoticeModify;
