import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';


function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
    
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw);
        axios
        .post("http://localhost:8080/", {
            email: inputId,
            passwd: inputPw,
        })
        .then((res) => {
            console.log(res);
            console.log("res.data.userId :: ", res.data.userId);
            console.log("res.data.msg :: ", res.data.msg);
            if (res.data.email === undefined) {
              // id 일치하지 않는 경우
            console.log("======================", res.data.msg);
            alert("입력하신 id 가 일치하지 않습니다.");
            } else if (res.data.email === null) {
              // id는 있지만, pw 는 다른 경우
            console.log(
                "======================",
                "입력하신 비밀번호 가 일치하지 않습니다."
            );
            alert("입력하신 비밀번호 가 일치하지 않습니다.");
            } else if (res.data.email === inputId) {
              // id, pw 모두 일치
            console.log("======================", "로그인 성공");
              sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
              sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
            }
            // 작업 완료 되면 페이지 이동
            window.location.href = '/';
        })
        .catch();
    };

    return (
    <>
    <div className='bg-gray-50 py-12'>
                    <div className="bg-white border shadow-md mx-auto my-12 rounded-2xl w-1/2">
                        <img alt='로고' src="/img/logo.png" className="mx-auto mt-12 h-16"></img>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="id"
                            className="w-1/2 mx-auto block text-sm font-semibold text-gray-800"
                        >ID</label>
                        <input
                            type="id"
                            className="w-1/2 block mx-auto px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="input_id"
                            value={inputId}
                            onChange={handleInputId}  
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
                            name="input_pw"
                            value={inputPw}
                            onChange={handleInputPw}
                        />
                    </div>
                    <div className="mt-12 text-center">
                        <button 
                            type="button" className="mx-auto w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            onClick={onClickLogin}
                        >LOGIN</button>
                    </div>
                </form>

                <div className="mt-8 text-xs font-light text-center text-gray-700">
                    <Link to={"/routes/3indy/Join"}>
                    <div className="mb-6 font-medium text-green-600 hover:underline">
                        JOIN US
                    </div>
                    </Link>
                </div>
                    </div>
            </div>
</>
        
    )
}
export default Login