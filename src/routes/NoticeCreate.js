import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/admin/notice/create/Content';
import Sidebar from '../components/Sidebar';

function NoticeCreate() {
    const [title, setTitle] = useState('');
    const [titleCheck, setTitleCheck] = useState(true);
    const [index, setIndex] = useState(0);
    const [contentList, setContentList] = useState([]);
    const [contextList, setContextList] = useState([]);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        console.log(contextList);
        console.log(imageList);
    }, [imageList, contextList]);
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const onAddClick = () => {
        const list = [...contentList];
        list.push(index);
        setContentList(list);
        setIndex(index + 1);
    };
    const changeContent = (content) => {
        let index = 0;
        const list = [];
        let flag = false;
        contextList.forEach((context) => {
            if (context.index === content.index) {
                flag = true;
            } else if (!flag) {
                index++;
                list.push(context);
            }
        });
        list.push(content);
        for (let i = index + 1; i < contextList.length; i++) {
            list.push(contextList.at(i));
        }

        setContextList(list);
    };

    const changeImage = (index, image) => {
        if (image === '') return;
        let imageIndex = 0;
        let flag = false;
        const list = [];
        contextList.forEach((context) => {
            if (!flag && context.index !== index) {
                imageIndex++;
            } else if (context.index === index) {
                flag = true;
            }
        });
        for (let i = 0; i < imageIndex; i++) {
            list.push(imageList.at(i));
        }
        list.push(image);
        for (let i = imageIndex + 1; i < imageList.length; i++) {
            list.push(imageList.at(i));
        }
        setImageList(list);
    };

    const deleteContent = (index) => {
        const list = [];
        const imgList = [];
        let imageIndex = 0;
        let flag = false;
        contextList.forEach((context) => {
            if (!flag && context.index !== index) {
                imageIndex++;
            } else if (context.index === index) {
                flag = true;
            }
        });
        for (let i = 0; i < contextList.length; i++) {
            if (i === imageIndex) continue;
            list.push(contextList.at(i));
            imgList.push(imageList.at(i));
        }
        setContextList(list);
        setImageList(imgList);
        const numberList = [];
        list.forEach((content) => {
            numberList.push(content.index);
        });
        setContentList(numberList);
    };
    const onSubmitClick = () => {
        if (title === '') {
            setTitleCheck(false);
            return;
        }
        setTitleCheck(true);
        const formData = new FormData();
        const noticeSaveDto = { title: title, contextList: contextList };
        const json = JSON.stringify(noticeSaveDto);
        const blob = new Blob([json], { type: 'application/json' });
        formData.append('noticeSaveDto', blob);
        imageList.forEach((image) => {
            formData.append('fileList', image);
        });
        console.log(contextList);
        console.log(imageList);
        axios
            .post('http://localhost:8080/admin/notice/create', formData)
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
                    <div>
                        <div className="text-center border-b pb-4">
                            <input
                                type="text"
                                placeholder="제목"
                                value={title}
                                onChange={onTitleChange}
                                className="w-full border rounded-md h-8 px-3 text-lg my-4"
                            />
                            {!titleCheck && (
                                <div className="text-red-500 tracking-wide text-md">
                                    제목을 입력해주세요.
                                </div>
                            )}
                        </div>
                        <div className="text-center mt-2">
                            {contentList.length >= 1 &&
                                contentList.map((content) => {
                                    return (
                                        <Content
                                            changeContent={changeContent}
                                            changeImage={changeImage}
                                            deleteContent={deleteContent}
                                            key={content}
                                            index={content}
                                        />
                                    );
                                })}
                            <div className="pt-2">
                                <button
                                    className="bg-gray-50 border rounded-lg tracking-wider px-2 py-1.5 my-4 duration-150 hover:bg-gray-200 hover:duration-150"
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
