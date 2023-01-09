import axios from "axios";
import { useEffect, useState, useRef } from "react";
import TodayFormal from "../../components/3indy/TodayFormal";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs';


function MyPage() {
    const [nickname, setNickname] = useState('');
    const [donationPrice, setDonationPrice] = useState(0);
    const [donation, setDonation] = useState(0);
    const [support, setSupport] = useState(0);
    const [comment, setComment] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8080/member/detail")
        .then((response)=> {
            console.log(response.data)
            setNickname(response.data.nickname)
            setDonation(response.data.donation)
            setDonationPrice(response.data.donationPrice)
            setComment(response.data.comment)
            setSupport(response.data.support)
        }).catch((error)=> {
            console.log(error);
        });

    }, [])

    // 컴포넌트 다운로드 함수
    const cardRef = useRef();
    const onDownloadBtn = () => {
    const card = cardRef.current;
    domtoimage
        .toBlob(card)
        .then((blob) => {
        saveAs(blob, 'certificate.png');
        });
    };
    

    return(
        <>
        <div className="bg-gray-50 py-12">
        <div className="bg-white border shadow-md mx-auto my-12 rounded-2xl w-1/2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
                <img alt='프로필' src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png"
                className="h-20 rounded-full mx-8 mt-8"></img>
                <div className='text-2xl font-extrabold text-center mt-14'>반가워요, </div>
                <div className='text-2xl text-center mt-14'>{nickname}님!</div>
            </ul>
            <div className="mx-12 mt-2">
                <button type="button" 
                className="border rounded-full h-6 w-12 bg-gray-100 text-xs"
                >수정
                </button>
            </div>

            <div className="border mx-auto mt-12 mb-6 rounded-2xl w-11/12 flex justify-between bg-white">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 w-full justify-between mr-8">
            <div className="mx-8 mt-8 mb-8">
                <div className="text-2xl font-bold">기부내역</div>
                <div className="mt-6 ">총 기부금</div>
                <div className="text-3xl font-extrabold text-green-600">{donationPrice+(support+comment)*100}원</div>
            </div>

                <div className=" mx-8 mt-20 ">
                    <li>
                        <span>기부횟수</span>
                        <span> {donation}회</span>
                    </li>
                    <li>
                        <span>직접기부</span>
                        <span> {donationPrice}원</span>
                    </li>
                    <li>
                        <span>참여기부</span>
                        <span> {(support+comment)*100}원</span>
                    </li>
                </div>
            </ul>
            </div>

            <div ref={cardRef} className='card'>
            <div className="border shadow-md mx-auto w-11/12 text-center bg-green-600">
            <div className="border mx-auto mt-6 mb-6 w-11/12 text-center bg-white">
                <div className="text-xl font-bold mt-12">활동 증서</div>
                <img alt="" src="/img/avatar.png" 
                className="mx-auto rounded-full h-32 mt-6 mb-2"></img>
                <div>{nickname}님</div>
                <div className="mt-6 text-xl font-bold">직접 기부금액 : {donationPrice}원</div>
                <div className="mt-12 mb-12">{TodayFormal()} DONEASY</div>
            </div>
            </div>
            <button className=' mt-2 mx-6 w-11/12' onClick={onDownloadBtn}>
            <BsDownload className="ml-auto"/>
            </button>
            </div>
            <div className="text-center mt-12 mb-6">
            <button type="button" className="underline text-gray-300 text-sm">회원 탈퇴</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default MyPage;