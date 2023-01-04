import { useEffect, useState } from "react";

function Comments({comments}) {
    const [member, setMember] = useState("");
    const [comment, setComment] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [comment])

    useEffect(() => {
        setMember(comments.member_id);
        setComment(comments.content);
        setCreatedDate(comments.created_date);
    }, []);
    
    return (
        <>
            {loading && <ul className="pt-2 pb-0 bg-[#fff] inline-block float-none ml-0 mr-1">
                <li className="w-700 mt-0 mb-0 m-auto pt-3 pl-0 pr-0 pb-3 bg-none">
                    <div className="cmt_info relative -top-2">
                        <span className="info_append pl-1 block" >
                            <span className="font-normal text-base">{member}</span>
                            <span className="text-green-600 relative text-sm pr-1 ml-1.5">100원</span>
                        </span>
                        <span className="block mt-1 pt-3.5 pl-3 pr-3 pb-3.5 rounded-lg bg-[#fafafa] break-words break-all ">
                            <span className="block leading-6 whitespace-pre-line">{comment}~</span>
                        </span>
                        <span className="info_append pt-02">
                            <span className="text-[#9f9f9f]">{createdDate}</span>
                            <button type="button" className="btn_report pr-0 pl-570 text-sm text-[#9f9f9f] align-[0] underline">신고</button>
                        </span>
                    </div>
                </li>
            </ul>}
            <div>
                {/** 더보기 ? */}
            </div>
        </>
    );
}

export default Comments;