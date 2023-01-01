import Comments from "../components/Comments";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Contents() {

    return (
        <>
            {/*
            <div id="wrap_content">
                <div class="comments_wrap">
                    <div class="num_box">
                        <span class="txt_tit">댓글</span>
                        <span class="txt_num">${commentsNum}</span>
                    </div>
                    <c:forEach var="comments" items="${commentsList}">
                        <div class="comments_box">
                            <span class="txt_info">
                                <span>${comments.userid }</span>
                                <span>${comments.donation }원</span>
                                <span>${comments.date_donation }</span>
                            </span>
                            <div class="txt_cmt">
                                <span>${comments.comments }</span>
                            </div>
                        </div>
                    </c:forEach>
                </div>
            // 수정하기 btn
                <c:if test="${content.writer == loginIdx}">
                    <div id="btn_update">
                        <a href="/write?cate=fund&idx=${content.idx}"><span>수 정</span></a>		
                    </div>
                </c:if>
                        
            
            </div> 
        */}
            <Header />
            <div className="pt-0 mb-100">
                {/* Title Content */}
                <div className="w-full h-300 mb-70 relative">
                    <div className="w-full h-full absolute bg-[#0006]">
                        <div className="pt-90 relative z-10 text-center align-middle">
                            <span className="block w-620 max-h-100 m-auto font-normal text-4xl text-white">title-data</span>
                            <span className="block w-620 max-h-14 mt-0 m-auto pt-2 text-sm text-white opacity-60">agency-data</span>
                        </div>
                    </div>
                    <div className="w-full h-full bg-cover bg-[#3b3820] bg-test-img"></div>
                </div>

                {/* Body Content */}
                <div className="relative">
                    <div className="w-700 mt-0 m-auto">
                        <span className="mt-12 block text-xl text-slate-900 break-all">contents-title-data</span>
                        <span className="block mt-4 m-auto text-base leading-7 text-slate-700 whitespace-pre-line break-all">
                            <p>
                                contents-contents-data<br/> 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                                이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 이것은 본문 내용입니다. 
                            </p>
                        </span>
                        <span className="block h-96 bg-no-repeat bg-center bg-cover bg-dog-shelter1"></span>
                    </div>
                </div>

                <div className="w-700 mt-12 m-auto border-t-2 border-b-2 text-center pt-14 pl-0 pr-0 pb-7">
                    <span className="block text-fundrasing-color text-4xl text-ellipsis whitespace-nowrap leading-80">1,750,000<span className="text-2xl">원</span></span>
                    <span className="text-base text-black">2,000,000원 목표</span>
                    <h1>직접기부</h1>
                    <h1>참여기부</h1>
                </div>

                {/* 댓글 */}
                <Comments />

                {/* 수정하기 Btn */}
                <div>
                    
                </div>

                {/* 응원하기 하단 바 */}
                <div className="z-100 fixed block left-1/2 bottom-2 w-700 h-14 -ml-350 bg-none" id="fund_float">
                    <a className="float-left overflow-hidden relative w-1/4 h-14 leading-60 bg-[#434343] rounded-l-md cursor-pointer" >
                        <span className="inline-block w-6 h-5 mt-5 mr-2 mb-0 ml-8 float-left"><img className="w-full" src="/img/ico_cheer.svg" /></span>
                        <span className="inline-block ml-1 mt-3.5 text-xl text-[#fff] align-baseline float-left">응원</span>
                        <span className="ml-2 inline-block text-base text-[#d9d9d9] mt-0">10{/*${cheer}*/}</span>
                        <div className="absolute top-2 right-0 w-01 h-9 bg-[#555]"></div>
                    </a>
                    <a className="float-left overflow-hidden relative w-1/4 h-14 leading-60 bg-[#434343] cursor-pointer" >
                        <span className="inline-block w-6 h-5 mt-1 mr-1 mb-0 ml-12"><img className="w-full" src="/img/ico_share.svg" /></span>
                        <span className="inline-block ml-1 text-xl text-[#fff] align-baseline">공유</span>
                        <span className="ml-2 inline-block text-base text-[#d9d9d9] mt-0">10{/*${cheer}*/}</span>
                    </a>
                    <a className="float-left overflow-hidden relative w-1/2 h-14 leading-60 bg-[#dc287c] rounded-r-md cursor-pointer text-center">
                        <span className="inline-block text-xl text-[#fff] align-baseline">기부하기</span>
                    </a>
                </div>
            </div>
            <Footer id="footer"/>
        </>
    );
}
export default Contents;