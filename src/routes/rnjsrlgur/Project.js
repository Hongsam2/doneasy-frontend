import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommentForm from "../../components/rnjsrlgur/CommentForm";

import Comments from "../../components/rnjsrlgur/Comments";
import ContentOfProject from "../../components/rnjsrlgur/ContentOfProject";
import Footer from "../../components/rnjsrlgur/layout/Footer";
import Header from "../../components/rnjsrlgur/layout/Header";

function Contents() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [titleImage, setTitleImage] = useState("");
    const [organization, setOrganization] = useState("");
    const [targetPrice, setTargetPrice] = useState(0);
    const [createdDate, setCreatedDate] = useState("");
    const [deadline, setDeadline] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fundrasingMoney, setFundrasingMoney] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentLoading, setCommentLoading] = useState(false);
    const [support, setSupport] = useState(0);
    const [donationList, setDonationList] = useState([]);
    const [donator, setDonator] = useState([]);
    const [donation, setDonation] = useState([]);
    const [donationMoney, setDonationMoney] = useState(0);
    const location = useLocation();
    
    console.log(location)
    console.log(comments);

    useEffect(() => {
        const dList = []
        const pList = []
        for(let i = 0; i < donationList.length; i ++) {
            dList.push(donationList[i].memberId)
            pList.push(donationList[i].price)
        }
        console.log(dList)
        console.log(pList)
        setDonator(dList);
        setDonation(pList);

    }, [donationList])
    

    useEffect(() => {
        let donationPrice = 0;
        donation.forEach((element) => {
            donationPrice += element;
        });
        console.log(donationPrice);
        setDonationMoney(donationPrice);
        setCommentLoading(true);
        setFundrasingMoney((donationPrice) + (comments.length * 100) + (support * 100));
    }, [comments, support, donation]);
    
    useEffect(() => {
        const projectId = location.pathname.substring(9)
        const formData =  new FormData();
        formData.append("id", projectId);
        axios.post("http://localhost:8080/project/get-project", formData)
            .then((response) => {
                console.log(response);
                setTitle(response.data.title);
                setOrganization(response.data.nickname);
                setTargetPrice(response.data.target_price);
                setCreatedDate(response.data.created_date);
                setDeadline(response.data.deadline);
                setStartDate(response.data.service_start_date);
                setEndDate(response.data.service_end_date);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.post("http://localhost:8080/content-of-project/get-content", formData)
            .then((response) => {
                console.log(response);
                const list = response.data;
                list.sort((a, b) => {
                    return a.order_num - b.order_num;
                })
                setContents(list);
                setLoading(true);
                setTitleImage(response.data[0].image);
            })
            .catch((error) => {
                console.log(error);
            });
        
        axios.post("http://localhost:8080/comment-of-project/get-comment", formData)
            .then((response) => {
                console.log(response);
                setComments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        
        axios.post("http://localhost:8080/support-of-project/get-support", formData)
        .then((response) => {
            console.log(response);
                setSupport(response.data.length)
            })
            .catch((error) => {
                console.log(error);
            })
        
        axios.post("http://localhost:8080/donation-of-project/get-donation", formData)
            .then((response) => {
                console.log(response);
                setDonationList(response.data);
                donationList.sort((a, b) => {
                    return a.id - b.id;
                })
                
            })
            .catch((error) => {
                console.log(error);
            });
        
        
    }, []);

    const onSupportClick = () => {
        
        const project_id = Number.parseInt(location.pathname.substring(9))
        axios.post("http://localhost:8080/support-of-project/save-support", {project_id:project_id})
            .then((response) => {
                console.log(response);
                console.log(support);
                setSupport(support + 1)
                
                
            })
            .catch((error) => {
                console.log(error);
            })
        
            
    };

    const onDonationClick = () => {
        const project_id = Number.parseInt(location.pathname.substring(9))

        const state = {
            next_redirect_pc_url: "",
            tid: "",
            payInfo: {
                cid: "TC0ONETIME",
                partner_order_id: "partner_order_id",
                partner_user_id: "partner_user_id",
                item_name: "donation",
                quantity: 1,
                total_amount: 1000,
                tax_free_amount: 0,
                approval_url: "http://localhost:8080/project/1",
                fail_url:"http://localhost:8080/project/1",
                cancel_url:"http://localhost:8080/project/1",
            },
        };

        const {payInfo} = state;
        console.log(payInfo)
        axios({
            url: '/api/v1/payment/ready',
            method: "POST",
            headers: {
                Authorization: "KakaoAK f574c7e87334cd77a430dc7101009266",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            payInfo
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }


    

    return (
        <>
            {/*
            <div id="wrap_content">
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
                            <span className="block w-620 max-h-100 m-auto font-normal text-4xl text-white">{title}</span>
                            <span className="block w-620 max-h-14 mt-0 m-auto pt-2 text-lg text-white opacity-60">by {organization}</span>
                        </div>
                    </div>
                    <img src={`data:image/*;base64,${titleImage}`} alt="titleImage" className="w-full h-full bg-cover"></img>
                </div>

                {/* Body Content */}
                <div className="relative">
                    {loading && contents.map((value) => {
                        return (
                            <ContentOfProject 
                                contents={value}
                                key={value.id}
                            />
                        );
                    })}
                </div>

                <div className="w-700 mt-12 m-auto border-t-2 border-b-2 text-center pt-14 pl-0 pr-0 pb-14">
                    <span className="block text-green-600 text-4xl text-ellipsis whitespace-nowrap leading-10">{fundrasingMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="text-2xl">원</span></span>
                    <span className="pt-0 text-lg text-black">{targetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 목표</span>
                    <span className="mt-2 text-base block">직접기부 : {donationMoney}원
                        <span className="block text-center text-sm">감사합니다♡</span>
                    </span>
                    <span className="mt-2 text-base block">참여기부 : {((support * 100) + (comments.length * 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                        <span className="block text-center text-sm">응원 : {(support * 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        <span className="block text-center text-sm">댓글 : {(comments.length * 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    </span>
                </div>
                
                {/* 프로젝트팀 */}
                <div className="relative">
                    <div className="w-700 m-auto pt-8 pl-0 pr-0 pb-8">
                        <span className="block m-auto leading-7 text-xl text-slate-700 whitespace-pre-line break-all">프로젝트팀 : {organization}</span>
                        <span className="block mt-2 text-base text-slate-600  break-all">모금기간: {createdDate} - {deadline}</span>
                        <span className="block mt-2 text-base text-slate-600  break-all">사업기간: {startDate} - {endDate}</span>
                    </div>
                </div>

                {/* 댓글 */}
                <div className="cmt_type3 w-700 relative m-auto">
                    <CommentForm 
                        money={comments.length * 100}
                        projectId={location.pathname.substring(9)}
                    />
                    <div>
                        <div className="wrap_info pt-0 border-t-0 mt-1">
                            <span>
                                댓글
                                <span className="emph_sign ml-1.5 relative text-green-600">{comments.length}</span>
                            </span>
                        </div>
                    </div>
                    {commentLoading && comments.map((comment) => {
                        return (
                            <Comments 
                                key={comment.id}
                                comments = {comment}
                                projectId={location.pathname.substring(9)}
                            />
                        );
                    })}

                </div>
                

                {/* 수정하기 Btn */}
                <div>
                    
                </div>

                {/* 응원하기 하단 바 */}
                <div className="z-100 fixed block left-1/2 bottom-2 w-700 h-14 -ml-350 bg-none text-center" id="fund_float">
                    <button disabled="" onClick={onSupportClick} className="float-left overflow-hidden relative w-1/3 h-14 leading-60 bg-[#434343] rounded-l-md cursor-pointer" >
                        <span className="inline-block w-6 h-5 mt-5 mr-3 mb-0 ml-16 float-left"><img className="w-full" src="/img/ico_cheer.svg" alt="cheerImg" /></span>
                        <span className="inline-block mt-3.5 text-xl text-[#fff] align-baseline float-left mr-1">응원</span>
                        <span  className="ml-0 inline-block text-base text-[#d9d9d9] mt-0 mr-16">{support}</span>
                        <div className="absolute top-2 right-0 w-01 h-9 bg-[#555]"></div>
                    </button>
                    
                    
                    <button onClick={onDonationClick} className="float-left overflow-hidden relative w-2/3 h-14 leading-60 bg-green-600 rounded-r-md cursor-pointer text-center">
                        <span className="inline-block text-xl text-[#fff] align-baseline">기부하기</span>
                    </button>
                </div>
            </div>
            <Footer id="footer"/>
        </>
    );
}
export default Contents;