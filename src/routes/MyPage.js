function MyPage() {
    return(
        <>
        <body className="bg-gray-50">
        <div className="bg-white border shadow-md mx-auto mt-12 mb-12 rounded-2xl w-1/2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
                <img src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png"
                className="h-20 rounded-full mx-8 mt-8"></img>
                <div className='text-2xl font-extrabold text-center mt-14'>반가워요, </div>
                <div className='text-2xl text-center mt-14'>NickName!</div>
            </ul>
            <div className="mx-12 mt-2">
                <button type="button" 
                className="border rounded-full h-6 w-12 bg-gray-100 text-xs"
                >수정
                </button>
            </div>

            <div className="border shadow-md mx-auto mt-12 mb-6 rounded-2xl w-11/12 flex justify-between bg-white">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 w-full justify-between mr-8">
            <div className="mx-8 mt-8 mb-8">
                <div className="text-2xl font-bold">기부내역</div>
                <div className="mt-6 ">총 기부금</div>
                <div className="text-3xl font-extrabold text-green-600">0원</div>
            </div>

                <div className=" mx-8 mt-20 ">
                    <li>
                        <span>기부횟수</span>
                        <span>0회</span>
                    </li>
                    <li>
                        <span>직접기부</span>
                        <span>0원</span>
                    </li>
                    <li>
                        <span>참여기부</span>
                        <span>0원</span>
                    </li>
                </div>
            </ul>
            </div>

            <div className="border shadow-md mx-auto mb-12 w-11/12 text-center bg-green-600">
            <div className="border mx-auto mt-6 mb-6 w-11/12 text-center bg-white">
                <div className="text-xl font-bold mt-12">활동 증서</div>
                <img src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png" 
                className="mx-auto rounded-full h-32 mt-6"></img>
                <div>NickName님</div>
                <div className="mt-6 text-xl font-bold">직접 기부금액 : 0원</div>
                <div className="mt-12 mb-12">2023.01.04 DONEASY</div>
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
export default MyPage;