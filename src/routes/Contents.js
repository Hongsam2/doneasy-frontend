function Contents() {
return (
        <>
            {/*
            <div id="wrap_content">
	        // Title Content 
                <div class="wrap_top_summary">
                    <div class="cover">
                        <div class="front-pack">
                            <span class="tit_visual">${content.title}</span>
                            <span class="txt_sponsor">${content.agency}</span>
                            <div class="hash_group">
                                <a class="topic_hash">${subtopic}</a>
                                <a class="link_hash">${content.tag1}</a>
                                <c:if test="${content.tag2 ne null}">
                                    <a class="link_hash">${content.tag2}</a>
                                </c:if>
                                <c:if test="${content.tag3 ne null}">
                                    <a class="link_hash">${content.tag3}</a>
                                </c:if>
                            </div>
                        </div>
                    </div>
                    <div class="cont_visual" style="background-image: url('${imgSrc}/for-test/${content.image0}');">		
                    </div>
                </div>
            // Body Content
                <div id="body_cont">
                    <div class="cont_box">
                        <span class="tit_head">${content.head1}</span>
                        <span class="txt_body">${content.body1}</span>
                        <c:if test="${content.image1 ne null}">
                            <span class="img_body" style="background-image: url('${imgSrc}/for-test/${content.image1}');"></span>
                        </c:if>
                        <c:if test="${content.youtube1 ne null}">
                            <div class="video_wrap">
                                <iframe class="video" src="${content.youtube1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""> 
                                </iframe>
                            </div>	
                        </c:if>	
                    </div>
                        
                    <div class="price_box">
                        <span class="txt_price">${content.pricestate}<span class="txt_won">원</span></span>
                        <span class="txt_state">${content.price}원 목표</span>
                    </div>
                        
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
                </div>
            // 수정하기 btn
                <c:if test="${content.writer == loginIdx}">
                    <div id="btn_update">
                        <a href="/write?cate=fund&idx=${content.idx}"><span>수 정</span></a>		
                    </div>
                </c:if>
                        
            // 응원하기 하단바
                <div class="fund_float">
                    <a class="btn_c" onclick="cheer(${content.idx}, ${loginIdx})">
                        <span class="ico_cheer"><img src="${imgSrc}/ico_cheer.svg"></span>
                        <span class="txt_cheer">응원</span>
                        <span class="num_active">${cheer}</span>
                        <div class="after"></div>
                    </a>
                    <a class="btn_s" onclick="share()">
                        <span class="ico_share"><img src="${imgSrc}/ico_share.svg"></span>
                        <span class="txt_share">공유</span>
                    </a>
                    <a class="btn_d" onclick="donate_open(${loginIdx})">
                        <span>기부하기</span>
                    </a>
                </div> 
            </div> 
        */}
            <fundrasing>
                <div className="pt-70 mb-100">
                    {/* Title Content */}
                    <div className="w-full h-300 mb-70 relative">
                        <div className="w-full h-full absolute bg-[#0006]">
                            <div className="pt-90 relative z-10 text-center align-middle">
                                <span className="block w-620 max-h-100 m-auto font-normal text-4xl text-white">title-data</span>
                                <span className="block w-620 max-h-14 mt-0 m-auto pt-2 text-sm text-white opacity-60">agency-data</span>
                            </div>
                        </div>
                        {/*<div className="w-full h-full bg-cover bg-[#3b3820]" style="background-image: url('${imgSrc}/for-test/${content.image0}');"></div>*/}
                    </div>
                    {/* Body Content */}
                    <div>

                    </div>
                    {/* 수정하기 Btn */}
                    <div>

                    </div>
                    {/* 응원하기 하단 바 */}
                    <div>

                    </div>
                </div>
            </fundrasing>
        </>
    );
}
export default Contents;