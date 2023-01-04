import Sidebar from '../components/Sidebar';

function Campaign() {
    return (
        <>
            <div className="flex bg-[#fefefe] w-3/5 mx-auto">
                <Sidebar focus="campaign" />
                <div className="w-9/12 mx-auto pt-20 bg-gray-100">
                    <div className="bg-gray-500">This is Campaign</div>
                </div>
            </div>
        </>
    );
}
export default Campaign;
