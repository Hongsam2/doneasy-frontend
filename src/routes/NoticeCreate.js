import { useEffect, useState } from 'react';
import Content from '../components/admin/notice/create/Content';
import Sidebar from '../components/Sidebar';

// TODO 이미지의 미리보기가 하나만 생성됨, 반복문 함수를 사용하하면 delete가 안됨
function NoticeCreate() {
    const [title, setTitle] = useState('');
    const [index, setIndex] = useState(0);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        const list = [...contentList];
        setContentList(list);
    }, [index]);
    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const onAddClick = () => {
        setIndex(index + 1);
        console.log(index);
    };
    const renderContent = () => {
        const result = [];
        for (let i = 1; i < index + 1; i++) {
            result.push(
                <Content
                    i={i}
                    changeContent={changeContent}
                    key={i}
                    deleteContent={deleteContent}
                />
            );
        }
        return result;
    };
    const changeContent = (content, index) => {
        const list = [];
        for (let i = 0; i < index; i++) {
            list.push(contentList.at(i));
            console.log(list);
        }
        list.push(content);
        console.log(list);
        for (let i = index + 1; i < contentList.length; i++) {
            list.push(contentList.at(i));
            console.log(list);
        }
        setContentList(list);
    };

    const deleteContent = (index) => {
        if (index === 0) {
            return;
        }
        const list = [...contentList];
        list.splice(index, 1);
        setContentList(list);
        setIndex(list.length);
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
                            <Content
                                i={0}
                                changeContent={changeContent}
                                deleteContent={deleteContent}
                            />
                            {renderContent()}
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
                            <button className="rounded-lg px-3 py-1.5 tracking-wider mr-2 border bg-gray-50 duration-150 hover:bg-gray-100 hover:duration-150">
                                Sumbit
                            </button>
                            <button className="rounded-lg px-3 py-1.5 tracking-wider ml-2 border bg-gray-50 duration-150 hover:bg-gray-100 hover:duration-150">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeCreate;
