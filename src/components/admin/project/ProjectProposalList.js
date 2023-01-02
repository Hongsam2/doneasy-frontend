function ProjectProposalList({ status }) {
    const id = 1;
    const onListClick = () => {
        console.log('haha');
        window.location.href = `/admin/project/proposal/detail/${id}`;
    };
    return (
        <>
            <div className="flex text-center my-2">
                <div
                    className="w-1/4 tracking-wide rounded-lg hover:cursor-pointer hover:bg-gray-100"
                    onClick={onListClick}
                >
                    우리 할 수 있지..?
                </div>
                <div className="w-1/4 tracking-wide">Donzo</div>
                <div className="w-1/4 tracking-wide">
                    <button
                        className={`rounded-lg tracking-wider px-3 py-1.5 duration-150 hover:duration-150 ${
                            status === 'fail'
                                ? 'bg-red-100 hover:bg-red-200'
                                : 'bg-green-100 hover:bg-green-200'
                        }`}
                    >
                        FAIL
                    </button>
                </div>
                <div className="w-1/4 tracking-wide">2023.01.01</div>
            </div>
        </>
    );
}
export default ProjectProposalList;
