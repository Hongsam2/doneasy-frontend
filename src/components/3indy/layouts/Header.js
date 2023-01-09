import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';
import * as React from 'react';
import { BsSearch } from 'react-icons/bs';

//BsSearch

const Header= () => {

    return (
        <>
        <div>
        <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
            <Link to={"/"}>
                <img alt='' src="/img/logo.png" className="mr-3 h-6 sm:h-9"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </Link>
            </div>
            <div className="flex items-center lg:order-2">
            
            <img alt='' src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png"
                className="h-8 rounded-full"></img>
            <div className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
            <Dropdown text="Doneur"
            options={[
                {label: '마이페이지', value: '1', href: '/routes/3indy/MyPage'},
                {label: '그룹페이지', value: '2', href: '/routes/3indy/GroupPage'},
                {label: '로그아웃', value: '3', href: '/'},
            ]}
            ></Dropdown>
            </div>

                <Link to={"/routes/3indy/login"}>
                <div className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</div>
                </Link>
                <Link to={"/routes/3indy/Search"}>
                <div className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><BsSearch/></div>
                </Link>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="!#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/routes/3indy/Donation" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">기부하기</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">모금후기</a>
                    </li>
                    <li>
                        <Dropdown text='더보기' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        options={[
                            {label: '공지사항', value: 'notice', href: '/routes/3indy/Notice'},
                            {label: '기업소개', value: 'intro', href: '/routes/3indy/Intro'},
                        ]}
                        ></Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</div>


        </>
    )

}
export default Header