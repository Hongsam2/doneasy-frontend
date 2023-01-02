import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/admin/notice/List';
import Sidebar from '../components/Sidebar';

function Notice() {
    const [text, setText] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/notice')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    const onSearchChange = (e) => {
        setText(e.target.value);
    };
    const onEnterKeyDown = (e) => {
        if (e.code === 'Enter') {
            onSubmitClick();
        }
    };
    const onSubmitClick = (e) => {
        console.log('press enter');
    };
    const onDetailClick = (i) => {
        window.location.href = `/admin/notice/detail/${i}`;
    };
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-7/12 mx-auto pt-20 min-w-fit">
                    <div className="text-right">
                        <Link to="/admin/notice/create">
                            <button className="border bg-gray-100 rounded-md mb-4 text-gray-800 tracking-wider py-0.5 px-6 duration-150 hover:duration-150 hover:bg-gray-200">
                                작성
                            </button>
                        </Link>
                    </div>
                    <div className="min-h-fit border-t border-gray-300">
                        <table className="h-full w-full">
                            <thead>
                                <tr>
                                    <td className="px-4 py-1">#</td>
                                    <td className="px-60">제목</td>
                                    <td className="px-24">게시일</td>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <List index={1} onDetailClick={onDetailClick} />
                                <List index={2} onDetailClick={onDetailClick} />
                                <List index={3} onDetailClick={onDetailClick} />
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
