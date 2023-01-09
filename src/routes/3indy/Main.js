import TodayTimeFormal from '../../components/3indy/TodayTimeFormal';
import TodayFormal from '../../components/3indy/TodayFormal';
import Weather from '../../components/3indy/Weather';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/3indy/layouts/Header';

function Main() {
    const [price, setPrice] = useState([]);
    const [priceList, setPriceList] = useState([]);
    const [priceCount, setPriceCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const pList = [];
        for (let index = 0; index < price.length; index++) {
            pList.push(price[index].price);
        }
        setPriceList(pList);
        setPriceCount(price.length);
    }, [price]);

    useEffect(() => {
        let donationPrice = 0;
        priceList.forEach((element) => {
            donationPrice += element;
        });
        console.log(donationPrice);
        setTotalPrice(donationPrice);
    }, [priceList]);

    useEffect(() => {
        axios
            .post('http://localhost:8080/donation-of-project/get-donation')
            .then((response) => {
                console.log(response);
                setPrice(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="bg-gray-50 py-12 font-kakao">
                <div className=" w-11/12 mx-auto font-kakao">
                    <div className="my-4">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            <div className="w-1/2">
                                <div className="font-bold text-3xl mt-12">
                                    <div>우리 모두 새해에도</div>
                                    <div> 힘을 내보아요💜</div>
                                </div>
                            </div>

                            <div className="m-auto pr-0 w-full py-6 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                                <img
                                    alt=""
                                    src="https://t1.kakaocdn.net/together_image/common/ico_home_donation.png"
                                    className="h-16 ml-auto mt-6 flex items-center"
                                ></img>
                                <div className="font-bold  text-gray-400 mt-4 bg-white text-xl text-center border-2 rounded-full w-1/4 py-6">
                                    기부 {priceCount}건
                                </div>
                                <img
                                    alt=""
                                    src="https://t1.kakaocdn.net/together_image/common/bg_home_hands.png"
                                    className="h-16 ml-auto mt-6 flex items-center rounded-full"
                                ></img>
                                <img
                                    alt=""
                                    src="https://t1.kakaocdn.net/together_image/common/ico_action_people.png"
                                    className="h-16 ml-auto mt-6 flex items-center"
                                ></img>
                                <a
                                    href="/intro"
                                    className="mr-2 font-bold text-gray-400 mt-4 bg-white float-right text-xl text-center border-2 rounded-full w-1/4 py-6"
                                >
                                    DONEASY 소개
                                </a>
                            </div>
                        </ul>

                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            <div className="flex flex-col font-medium lg:flex-row lg:space-x-6 lg:mt-0 bg-white shadow-md mb-6 rounded-2xl w-3/4">
                                <div className="w-1/2">
                                    <img
                                        alt=""
                                        src="/img/give.jpg"
                                        className="rounded-l-2xl"
                                    ></img>
                                </div>
                                <div className="px-4 py-10">
                                    <p className="text-2xl font-bold mb-4">
                                        WELCOME TO DONEASY!
                                    </p>
                                    <p className="text-gray-500">
                                        DONEASY는 당신의 소중한 참여를
                                        기다립니다.
                                    </p>
                                    <p className="text-gray-500">
                                        당신의 참여로 세상을 바꿀 수 있습니다.
                                    </p>
                                    <p className="text-gray-500">
                                        지금 당장 시작하세요!
                                    </p>
                                </div>
                            </div>
                            <div className="font-bold bg-yellow-300 shadow-md mb-6 rounded-2xl w-1/4">
                                <div className="mx-8 my-8 ">
                                    <div className="text-2xl">우리가</div>
                                    <div className="text-2xl">
                                        같이만든 변화들
                                    </div>
                                    <div className="mt-2 text-gray-500">
                                        <TodayFormal />
                                        기준
                                    </div>
                                    <div className="bg-white mt-6 py-5 h-28">
                                        <ul className="mx-5 flex flex-col font-bold lg:flex-row lg:space-x-2 lg:mt-0">
                                            <img
                                                alt=""
                                                className="w-8"
                                                src="https://t1.kakaocdn.net/together_image/common/ico_won.png"
                                            ></img>
                                            <p className="text-xl">총 기부금</p>
                                        </ul>
                                        <p className="mx-6 mt-2 text-2xl text-right underline">
                                            {totalPrice
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ','
                                                )}
                                            원
                                        </p>
                                        <p className="font-xm text-center py-2 text-yellow-600">
                                            ♥ THANK YOU ♥
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ul>

                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0 bg-white shadow-md mb-12 rounded-2xl w-3/4">
                                <div className="w-1/2">
                                    <img
                                        alt=""
                                        src="/img/hand.jpg"
                                        className="rounded-l-2xl"
                                    ></img>
                                </div>
                                <div className="px-4 py-10">
                                    <p className="text-2xl font-bold mb-4">
                                        DONEASY 기부 방법
                                    </p>
                                    <p className="text-gray-500">
                                        직접 기부 : 후원금을 직접 결제합니다.
                                    </p>
                                    <p className="text-gray-500">
                                        참여 기부 : 기부 프로그램에 응원과
                                        댓글을 남겨주시면{' '}
                                    </p>
                                    <p className="text-gray-500">
                                        후원 기업의 지원금으로 각각 100원씩
                                        기부됩니다.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-green-500 shadow-md mb-12 rounded-2xl w-1/4">
                                <div className="mx-auto my-auto mt-6 text-center font-bold rounded-xl">
                                    <Weather />
                                </div>
                                <div className="mt-3 mb-5 mx-auto my-auto text-center text-green-700 text-xl font-bold">
                                    <TodayTimeFormal />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;
