import { Link } from "react-router-dom";

function Title() {
    return(
        <>
        <div className="py-12">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0 bg-gray-50 w-1/2 mx-auto px-12">
                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_all_221018.png" className="w-12 h-12"></img>
                    <div>전체</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_kidz.png" className="w-12 h-12"></img>
                    <div>어린이</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_young.png" className="w-12 h-12"></img>
                    <div>청년</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_old_221018.png" className="w-12 h-12"></img>
                    <div>어르신</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_accessible.png" className="w-12 h-12"></img>
                    <div>장애인</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_culture.png" className="w-12 h-12"></img>
                    <div>환경</div>
                </div>
                </Link>

                <Link to={"/"}>
                <div className="text-center">
                    <img alt='' src="https://t1.kakaocdn.net/together_image/ico_social.png" className="w-12 h-12"></img>
                    <div>사회</div>
                </div>
                </Link>
            </ul>
        </div>
        </>
    )

}
export default Title;