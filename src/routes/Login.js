import { useState } from "react"
import { Link } from "react-router-dom"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [button, setButton] = useState(true);

    //임시로 설정한 아이디, 나중에 관리자 아이디로 변경
    const realId = "abc123";
    const realPw = "123456";

    const goToMain = () => {
        window.location.href = '/';

    };

    function changeButton() {
        pw.length >= 5 ? setButton(false) :setButton(true);
    }

    return (
    <>
    <body className='bg-gray-50'>
            <div className=" w-1/2 mx-auto">
                <div className="my-4">
                    <div className="bg-white border shadow-md mx-auto mt-12 mb-12 rounded-2xl">
                        
                        <img src="/img/logo.png" className="mx-auto mt-12 h-16"></img>
                    
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="id"
                            className="w-1/2 mx-auto block text-sm font-semibold text-gray-800"
                        >ID</label>
                        <input
                            type="id"
                            className="w-1/2 block mx-auto px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => {
                                setId(e.target.value);
                                }}
                                onKeyUp={changeButton}
                                
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="w-1/2 mx-auto mt-6 block text-sm font-semibold text-gray-800"
                        >PASSWORD</label>
                        <input
                            type="password"
                            className="block w-1/2 mx-auto px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => {
                                setPw(e.target.value);
                            }}
                            onKeyUp={changeButton}
                        />
                    </div>
                    <div className="mt-12 text-center">
                        <button 
                            type="button" className="mx-auto w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            onClick={e => {
                                if (realId == id && realPw == pw) {
                                        goToMain()
                                } else {
                                    alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                                }
                                }}
                        >LOGIN</button>
                    </div>
                </form>

                <div className="mt-8 text-xs font-light text-center text-gray-700">
                    <Link to={"/routes/Join"}>
                    <div className="mb-6 font-medium text-green-600 hover:underline">
                        JOIN US
                    </div>
                    </Link>
                </div>
                    </div>
                </div>
            </div>
            </body>
</>
        
    )
}
export default Login