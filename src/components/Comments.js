function Comments({comments}) {
    
    return (
        <>
            <div className="cmt_type3 w-700 relative m-auto">
                <div className="pb-14 border-b-2">
                    <div className="inner_write w-700 mt-5 mb-0 m-auto pr-0 pl-0">
                        <div className="mb-4 pl-0 pb-2 text-base border-b-2 ">
                            <span className="txt_heading mr-01">Don 지원 댓글 기부금</span>
                            <span className="ml-1.5 text-[#dc287c]">0원</span>
                        </div>
                        <div className="cmt_info ml-0 relative -top-2">
                            <div className="txt_cmt block relative mt-1 pt-3 pl-3 pr-3 pb-4 border-none rounded-lg text-[#444] text-base bg-[#f7f8f9] ">
                                <label form="txtCmt" ></label>
                                <textarea className="w-full h- resize-none outline-none block relative mt-1 pt-3 pl-3 pr-3 pb-4 border-none rounded-lg text-[#444] text-base bg-[#f7f8f9]" name="txtCmt" placeholder="댓글만 써도 Don이 대신 기부합니다. Doneasy 함께 해요!" maxLength={500} minLength={0}></textarea>
                                <button className="-w-9 absolute -bottom-10 right-0 w-88 h-8 rounded-sm text-base leading-8 text-[#fff] bg-[#828282] ">등록</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="wrap_info pt-0 border-t-0">
                        <span>
                            댓글
                            <span className="emph_sign ml-1.5 relative text-[#dc287c]">1</span>
                        </span>
                    </div>
                </div>
                <ul className="pt-2 pb-12 bg-[#fff] inline-block float-none ml-0 mr-1">
                    <li className="w-700 mt-0 mb-0 m-auto pt-7 pl-0 pr-0 pb-6 bg-none">
                        <div className="cmt_info relative -top-2">
                            <span className="info_append pl-1 block" >
                                <span className="font-normal text-base">asd1</span>
                                <span className="text-[#dc287c] relative text-sm pr-1 ml-1.5">100원</span>
                            </span>
                            <span className="block mt-1 pt-3.5 pl-3 pr-3 pb-3.5 rounded-lg bg-[#fafafa] break-words break-all ">
                                <span className="block leading-6 whitespace-pre-line">동참합니다~</span>
                            </span>
                            <span className="info_append pt-02">
                                <button type="button" className="btn_report ml-680 text-sm text-[#9f9f9f] align-[0] underline">신고</button>
                            </span>
                        </div>
                    </li>
                </ul>
                <div>
                    {/** 더보기 ? */}
                </div>
            </div>
        </>
    );
}

export default Comments;