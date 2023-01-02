import { useEffect, useState } from 'react';

function SubSidebar({ subject }) {
    const [subtitle, setSubtitle] = useState('');

    useEffect(() => {
        setSubtitle(subject);
    }, [subject]);

    const onBtnClick = (e) => {
        const message = e.target.innerText;
        if (message === '제안서 요청') {
            window.location.href = '/admin/project/proposal';
        }
    };
    return (
        <>
            <div className="h-screen w-32 text-center bg-gray-50">
                <div className="pt-20">
                    {subject === 'project' && (
                        <div>
                            <button
                                className={`py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider ${
                                    subtitle === '' && 'text-gray-700 text-lg'
                                }`}
                                onClick={onBtnClick}
                            >
                                제안서 목록
                            </button>
                            <button
                                className={`py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider ${
                                    subtitle === 'project' &&
                                    'text-gray-700 text-lg'
                                }`}
                                onClick={onBtnClick}
                            >
                                프로젝트
                            </button>
                        </div>
                    )}
                    {subject === 'comment' && <div>comment</div>}
                    {subject === 'campaign' && <div>campaign</div>}
                </div>
            </div>
        </>
    );
}
export default SubSidebar;
