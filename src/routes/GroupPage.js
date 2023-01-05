import GroupIntro from "../components/GroupIntro";

function GroupPage() {
    return(
        <>
        <body className="bg-gray-50">
        <div className="bg-white border shadow-md mx-auto mt-12 mb-12 rounded-2xl w-1/2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 ">
                <img src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png"
                className="h-20 rounded-full mx-8 mt-8"></img>
                <div className='text-2xl font-extrabold text-center mt-14'>반가워요, </div>
                <div className='text-2xl text-center mt-14'>GroupName!</div>
            </ul>
            <div className="mx-12 mt-2">
                <button type="button" 
                className="border rounded-full h-6 w-12 bg-gray-100 text-xs"
                >수정
                </button>
            </div>

            <GroupIntro/>

            <div className="border shadow-md mx-auto mt-6 mb-6 rounded-2xl w-11/12">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 w-11/12 mx-auto justify-between">
            <div className="mt-8 mb-8">
                <div className="text-2xl font-bold">기부 활동</div>
                <div className="mt-6 ">총 주최 횟수</div>
                <div className="text-3xl font-extrabold text-green-600">0회</div>
            </div>

                <div className=" mx-8 mt-24">
                <li>
                    <span>주최중</span>
                    <span>0회</span>
                </li>
                <li>
                    <span>주최완료</span>
                    <span>0회</span>
                </li>
                </div>
            </ul>
            
            <div className=" w-11/12 border-t-2 mx-auto mb-6">
                <div className="mt-6">주최한 기부활동 리스트 1</div>
                <div>주최한 기부활동 리스트 2</div>
                <div>주최한 기부활동 리스트 3</div>
            </div>
            </div>


            <div className="text-center mb-6">
            <button type="button" className="underline text-gray-300">회원 탈퇴</button>
            </div>
        </div>
        </body>
        </>
    )
}
export default GroupPage;