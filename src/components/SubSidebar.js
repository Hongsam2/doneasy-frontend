function SubSidebar({ subject }) {
    return (
        <>
            <div className="h-screen bg-gray-300 w-32 text-center">
                <div className="pt-20">
                    {subject === 'project' && (
                        <div>
                            <button className="py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider">
                                제안서 목록
                            </button>
                            <button className="py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider">
                                제안서 요청
                            </button>
                            <button className="py-2 my-2 text-gray-400 hover:text-gray-700 hover:duration-150 hover:text-lg duration-150 block mx-auto tracking-wider">
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
