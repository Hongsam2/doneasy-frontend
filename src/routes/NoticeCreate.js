import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/admin/notice/create/Content';
import Sidebar from '../components/Sidebar';

function NoticeCreate() {
    const [title, setTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [contentList, setContentList] = useState([]);
    const [contextList, setContextList] = useState([]);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const onAddClick = () => {
        console.log(index);
        const list = [...contentList];
        list.push(index);
        console.log('list');
        console.log(list);
        setContentList(list);
        setIndex(index + 1);
    };
    const changeContent = (content, index) => {
        const list = [];
        for (let i = 0; i < index; i++) {
            list.push(contextList.at(i));
        }
        list.push(content);
        for (let i = index + 1; i < contentList.length; i++) {
            list.push(contextList.at(i));
        }
        setContextList(list);
    };

    const deleteContent = (index) => {
        console.log(contextList);
        const list = [...contextList];
        console.log('hi');
        const removedList = list.filter((content) => {
            return content && content.index !== index;
        });
        setContextList(removedList);
        console.log('removedList');
        console.log(removedList);
        const numberList = [];
        removedList.forEach((content) => {
            numberList.push(content.index);
        });
        setContentList(numberList);
    };
    const onSubmitClick = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('contextList', contextList);
        console.log(contextList);
        console.log(formData);
        axios
            .post('http://localhost:8080/admin/notice/create', formData)
            .then((response) => {
                console.log(response);
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
                    <div>
                        <div className="text-center border-b pb-4">
                            <input
                                type="text"
                                placeholder="제목"
                                value={title}
                                onChange={onTitleChange}
                                className="w-full border rounded-md h-8 px-3 text-lg my-4"
                            />
                        </div>
                        <div className="text-center mt-2">
                            {contentList.length >= 1 &&
                                contentList.map((content) => {
                                    return (
                                        <Content
                                            changeContent={changeContent}
                                            deleteContent={deleteContent}
                                            key={content}
                                            index={content}
                                        />
                                    );
                                })}
                            <div className="border-t pt-2">
                                <button
                                    className="bg-blue-50 border rounded-lg tracking-wider px-2 py-1.5 my-4 duration-150 hover:bg-blue-200 hover:duration-150"
                                    onClick={onAddClick}
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                        <div className="text-center border-t pt-4">
                            <button
                                className="rounded-lg px-3 py-1.5 tracking-wider mr-2 border bg-gray-50 duration-150 hover:bg-gray-100 hover:duration-150"
                                onClick={onSubmitClick}
                            >
                                Sumbit
                            </button>
                            <Link to="/admin/notice">
                                <button className="rounded-lg px-3 py-1.5 tracking-wider ml-2 border bg-gray-50 duration-150 hover:bg-gray-100 hover:duration-150">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeCreate;
