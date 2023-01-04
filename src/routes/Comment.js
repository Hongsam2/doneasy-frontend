import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentList from '../components/admin/comment/CommentList';
import Sidebar from '../components/Sidebar';

function Comment() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [contents]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/comment')
            .then((response) => {
                console.log(response);
                setContents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onSortByDateClick = () => {
        const list = [...contents];
        list.sort((a, b) => {
            const aYear = a.createdDate.substring(0, 4);
            const bYear = b.createdDate.substring(0, 4);
            const aMonth = a.createdDate.substring(5, 7);
            const bMonth = b.createdDate.substring(5, 7);
            const aDay = a.createdDate.substring(8);
            const bDay = a.createdDate.substring(8);

            if (aYear === bYear) {
                if (aMonth === bMonth) {
                    return bDay - aDay;
                }
                return bMonth - aMonth;
            }
            return bYear - aYear;
        });
        setContents(list);
    };
    const onSortByReportsClick = () => {
        const list = [...contents];
        list.sort((a, b) => {
            return b.reports - a.reports;
        });
        setContents(list);
    };
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="comment" />
                <div className="w-9/12 mx-auto pt-20">
                    <div className="text-center">
                        <div className="border-b pb-4">
                            <button
                                className="px-4 py-2 mr-8 rounded-lg border bg-gray-50 duration-150 tracking-wider hover:bg-gray-200 hover:duration-150"
                                onClick={onSortByDateClick}
                            >
                                날짜순
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border bg-gray-50 duration-150 tracking-wider hover:bg-gray-200 hover:duration-150"
                                onClick={onSortByReportsClick}
                            >
                                신고순
                            </button>
                        </div>
                        <div className="flex border-b py-2">
                            <div className="w-1/4 font-semibold">id</div>
                            <div className="w-1/4 font-semibold">내용</div>
                            <div className="w-1/4 font-semibold">신고수</div>
                            <div className="w-1/4 font-semibold">날짜</div>
                            <div className="w-1/4 font-semibold">상태</div>
                        </div>
                        <div>
                            {loading &&
                                contents.map((value) => {
                                    return (
                                        <CommentList
                                            key={value.id}
                                            value={value}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Comment;
