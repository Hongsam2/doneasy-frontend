import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../../components/admin/notice/List';
import Sidebar from '../../components/admin/Sidebar';

function Notice() {
    const [text, setText] = useState('');
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [postList]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/notice')
            .then((response) => {
                setPostList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const onSearchChange = (e) => {
        setText(e.target.value);
    };
    const onEnterKeyDown = (e) => {
        if (e.code === 'Enter') {
            onSubmitClick();
        }
    };
    const onSubmitClick = () => {
        if (text !== '') {
            axios
                .get(`http://localhost:8080/admin/notice?s=${text}`)
                .then((response) => {
                    setPostList(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    const onDetailClick = (i) => {
        window.location.href = `/admin/notice/detail/${i}`;
    };
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-9/12 mx-auto pt-20 min-w-fit">
                    <div className="text-right">
                        <Link to="/admin/notice/create">
                            <button className="border bg-gray-100 rounded-md mb-4 text-gray-800 tracking-wider py-0.5 px-6 duration-150 hover:duration-150 hover:bg-gray-200">
                                작성
                            </button>
                        </Link>
                    </div>
                    <div className="min-h-fit border-t border-gray-300">
                        <table className="h-full w-full">
                            <thead className="text-center">
                                <tr>
                                    <td className="py-1">#</td>
                                    <td>제목</td>
                                    <td>게시일</td>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {loading &&
                                    postList.map((value) => {
                                        return (
                                            <List
                                                key={value.id}
                                                value={value}
                                                onDetailClick={onDetailClick}
                                            />
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                    <div className="border-t py-2 my-6 text-center border-gray-300">
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            className="rounded-2xl bg-gray-100 px-3 mr-3"
                            onChange={onSearchChange}
                            value={text}
                            onKeyDown={onEnterKeyDown}
                        />
                        <button
                            className="bg-gray-100 px-1 py-0.5 tracking-wider rounded-md duration-150 hover:bg-gray-200 hover:duration-150"
                            onClick={onSubmitClick}
                        >
                            검색
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Notice;
