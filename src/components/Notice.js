import { useState } from 'react';

function Notice() {
    const [text, setText] = useState('');
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
    return (
        <>
            <div className="h-screen pt-20">
                <div className="h-10 text-right">
                    <button className="border bg-gray-100 rounded-md text-gray-800 tracking-wider py-0.5 px-6 duration-150 hover:duration-150 hover:bg-gray-200">
                        작성
                    </button>
                </div>
                <div className="min-h-fit border-t border-gray-300">
                    <table>
                        <thead>
                            <tr>
                                <td className="px-4 py-1">#</td>
                                <td className="px-60">제목</td>
                                <td className="px-24">게시일</td>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className="border-t border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150">
                                <td className="py-1">1</td>
                                <td>기부를 합시다!</td>
                                <td>2020.12.31</td>
                            </tr>
                            <tr className="border-t border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150">
                                <td className="py-1">1</td>
                                <td>기부를 합시다!</td>
                                <td>2020.12.31</td>
                            </tr>
                            <tr className="border-t border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150">
                                <td className="py-1">1</td>
                                <td>기부를 합시다!</td>
                                <td>2020.12.31</td>
                            </tr>
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
        </>
    );
}
export default Notice;
