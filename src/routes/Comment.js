import Sidebar from '../components/Sidebar';

function Comment() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="comment" />
                <div className="w-7/12 mx-auto pt-20 bg-gray-100">
                    <div className="bg-gray-500">This is Comment</div>
                </div>
            </div>
        </>
    );
}
export default Comment;
