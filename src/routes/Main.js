const Main = () => {
    return (
        <>
        <div className='bg-gray-50 py-12 font-kakao'>
            <div className=" w-11/12 mx-auto font-kakao">
                <div className="my-4">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                    <div className="w-1/5">
                    <div className="font-bold text-2xl mt-12">우리 모두 새해에도 힘을 내보아요💜</div>
                    </div>

                    <div className='m-auto pr-0 w-full py-6 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0'>
                    <img src="https://t1.kakaocdn.net/together_image/common/ico_action_people.png" className='h-16 ml-auto mt-6 flex items-center'></img>
                        <div className=" shadow-md font-bold  text-gray-400 mt-4 bg-white text-xl text-center border rounded-full w-1/4 py-6">기부 12,345,678건</div>

                        <img src="https://t1.kakaocdn.net/together_image/common/bg_home_hands.png" className='h-16 ml-auto mt-6 flex items-center rounded-full'></img>
                        
                        <img src="https://t1.kakaocdn.net/together_image/common/ico_home_donation.png" className='h-16 ml-auto mt-6 flex items-center'></img>
                        <div className="mr-2 shadow-md font-bold text-gray-400 mt-4 bg-white float-right text-xl text-center border rounded-full w-1/4 py-6">금액 123,456,789원</div>
                    </div>

                    </ul>

                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                    <div className="flex flex-col font-medium lg:flex-row lg:space-x-6 lg:mt-0 bg-white border shadow-md mb-6 rounded-2xl w-3/4">
                        <div className='w-1/2'><img src='/img/give.jpg' className="rounded-l-2xl"></img>
                        </div>
                        <div className="mx-6 my-6">
                        <div className="text-2xl font-bold mb-4">WELCOME TO DONEASY!</div>
                        <div>당신의 소중한 참여를 기다립니다.</div>
                        </div>
                    </div>
                    <div className="bg-white border shadow-md mb-6 rounded-2xl w-1/4">
                        여기다가 뭐넣지
                    </div>
                    </ul>

                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                    <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0 bg-white border shadow-md mb-12 rounded-2xl w-3/4">
                        <div className='w-1/2'><img src='/img/hand.jpg' className="rounded-l-2xl"></img></div>
                        <div className="mx-6 my-6">
                            <div className="text-2xl font-bold mb-4">DONEASY 기부 방법</div>
                            <div>직접 기부 : 후원금을 직접 결제합니다.</div>
                            <div>참여 기부 : 기부 프로그램에 응원과 댓글을 남겨주시면 </div>
                            <div>후원 기업의 지원금으로 100원씩 기부됩니다.</div>
                        </div>
                    </div>
                    <div className="bg-white border shadow-md mb-12 rounded-2xl w-1/4">여기다가 뭐넣지</div>
                    </ul>
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default Main