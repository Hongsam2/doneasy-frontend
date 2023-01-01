function Comments() {

    return (
        <>
            <div className="relative">
                <div className="w-700 mt-0 m-auto">
                    <span className="txt_tit">댓글</span>
                    <span className="txt_num">commentsNum</span>
                </div>
                {/*
                <c:forEach var="comments" items="${commentsList}">
                    <div className="comments_box">
                        <span className="txt_info">
                            <span>${comments.userid }</span>
                            <span>${comments.donation }원</span>
                            <span>${comments.date_donation }</span>
                        </span>
                        <div className="txt_cmt">
                            <span>${comments.comments }</span>
                        </div>
                    </div>
                </c:forEach>
                */}
            </div>
        </>
    );
}

export default Comments;