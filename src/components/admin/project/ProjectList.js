function ProjectList({ status }) {
    return (
        <>
            <div className="flex text-center my-1">
                <div className="w-3/12">프로젝트 2주 남았다..</div>
                <div className="w-2/12">Donzo</div>
                <div className="w-2/12">010-9755-3247</div>
                <div className="w-2/12">100,000</div>
                <div className="w-2/12">1,300</div>
                <div className="w-1/12">
                    <button
                        className={`rounded-lg tracking-wider px-3 py-1.5 duration-150 hover:duration-150 ${
                            status === 'done'
                                ? 'bg-red-100 hover:bg-red-200'
                                : 'bg-green-100 hover:bg-green-200'
                        }`}
                    >
                        END
                    </button>
                </div>
                <div className="w-1/12">2022.01.17</div>
            </div>
        </>
    );
}
export default ProjectList;
