import axios from "axios";
import { useState } from "react";

function CommentForm({money, projectId}) {
    const [commentContent, setCommentContent] = useState("");


    const onContentChange = (e) => {
        setCommentContent(e.target.value);
    }
    const onSubmitClick = () => {
        const comment = {
            content : commentContent,
            project_id : projectId,
        };
        console.log(projectId)
        console.log(commentContent)

        axios.post("http://localhost:8080/comment-of-project/save-comment", comment)
            .then((response) => {
                window.location.reload();
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    
    return (
        <>
            <div className="pb-14 border-b-2">
                <div className="inner_write w-700 mt-5 mb-0 m-auto pr-0 pl-0">
                    <div className="mb-4 pl-0 pb-2 text-base border-b-2 ">
                        <span className="txt_heading mr-01">Don 지원 댓글 기부금</span>
                        <span className="ml-1.5 text-green-600">{money}원</span>
                    </div>
                    <div className="cmt_info ml-0 relative -top-2">
                        <div className="txt_cmt block relative mt-1 pt-3 pl-3 pr-3 pb-4 border-none rounded-lg text-[#444] text-base bg-[#f7f8f9] ">
                            <label form="txtCmt" ></label>
                            <textarea onChange={onContentChange} className="w-full h- resize-none outline-0 block relative mt-1 pt-3 pl-3 pr-3 pb-4 border-none rounded-lg text-[#444] text-base bg-[#f7f8f9]" name="txtCmt" placeholder="댓글만 써도 Don이 대신 기부합니다. Doneasy 함께 해요!" maxLength={500} minLength={0}></textarea>
                            <button onClick={onSubmitClick} className="-w-9 absolute -bottom-10 right-0 w-88 h-8 rounded-sm text-base leading-8 text-[#fff] bg-[#828282] ">등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentForm;