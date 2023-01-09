import { useEffect, useState } from 'react';

function SubSidebar({ subject }) {
    const onBtnClick = (e) => {
        const message = e.target.innerText;
        if (message === '제안서 목록') {
            window.location.href = '/admin/project/proposal';
        } else if (message === '프로젝트') {
            window.location.href = '/admin/project';
        }
    };
    return (
        <>
            <div className="h-screen w-32 text-center bg-gray-50">
                <div className="pt-20">
                    {(subject === 'project' || subject === 'proposal') && (
                        <div>
                            <button
                                className={`py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider ${
                                    subject === 'project' &&
                                    'text-gray-700 text-lg'
                                }`}
                                onClick={onBtnClick}
                            >
                                프로젝트
                            </button>
                            <button
                                className={`py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider ${
                                    subject === 'proposal' &&
                                    'text-gray-700 text-lg'
                                }`}
                                onClick={onBtnClick}
                            >
                                제안서 목록
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
