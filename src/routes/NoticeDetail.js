import Content from '../components/admin/notice/Content';
import Sidebar from '../components/Sidebar';

function NoticeDetail() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="notice" />
                <div className="w-7/12 mx-auto pt-20">
                    <div className="text-right">
                        <button className="rounded-lg bg-red-100 px-3 py-1.5 mr-4 tracking-wider duration-150 hover:bg-red-200 hover:duration-150">
                            삭제
                        </button>
                        <button className="rounded-lg bg-lime-100 px-3 py-1.5 tracking-wider duration-150 hover:bg-lime-200 hover:duration-150">
                            수정
                        </button>
                    </div>
                    <div className="border-t py-2 text-center tracking-wider text-4xl my-2">
                        title
                    </div>
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NoticeDetail;
