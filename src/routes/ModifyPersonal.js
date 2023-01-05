import axios from 'axios';
import React, { useState } from "react";



function ModifyPersonal (){

    const [memberID, setMemberID] = useState('');
    const [memberNickname, setMemberNickname] = useState('');
    const [memberPw, setMemberPw] = useState('');
    const [memberPwC, setMemberPwC] = useState('');
    const [memberMail, setMemberMail] = useState('');
    const [memberPN, setMemberPN] = useState('');

    const onCancelClick = () =>{
        window.location.href ='/';
    };
    const onMemberIdChange = (e) =>{
        setMemberID(e.target.value);
    }
    const onMemberNicknameChange = (e) =>{
        setMemberNickname(e.target.value)
    }
    const onMemberPwChange = (e) =>{
        setMemberPw(e.target.value)
    }
    const onMemberPwCChange = (e) =>{
        setMemberPwC(e.target.value)
    }
    const onMembermailChange = (e) =>{
        setMemberMail(e.target.value)
    }
    const onMemberPNChange = (e) =>{
        setMemberPN(e.target.value)
    }

    const onRegisterClick = () =>{
        if (!checkPW()){
            return;
        }
        
        const formData = new FormData();
        formData.append('member_id', memberID)
        formData.append('nickname', memberNickname)
        formData.append('password', memberPw)
        formData.append('email', memberMail)
        formData.append('phone_number', memberPN)
        
        axios
            .post('http://localhost:8080/member/save', formData)
            .then((response) => {
                console.log(response);
                console.log(formData);
            })
            .catch((error) => {
                console.log(error);
            })
        
    };

    const checkPW = () => {
        if (memberPw === memberPwC){
            return true;
        } else{
            alert('비밀번호와 확인란이 서로 다릅니다');
            return false;
        }
       
    } 
    return(
        
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-[#77c577]">
                            Doneasy
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                ID
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={memberID}
                                    onChange={onMemberIdChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                            <div className="mt-4">
                                    
                                    <label
                                    htmlFor="nickname"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Nickname
                                    </label>
                                    <div className="flex flex-col items-start">
                                        <input
                                        type="text"
                                        nickname="nickname"
                                        value={memberNickname}
                                        onChange={onMemberNicknameChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        </div>
                                </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={memberMail}
                                    onChange={onMembermailChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                PhoneNumber
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={memberPN}
                                    onChange={onMemberPNChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value={memberPw}
                                    onChange={onMemberPwChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={memberPwC}
                                    onChange={onMemberPwCChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                      
                        
                        <div className="flex items-center justify-end mt-4">
                           
                            <button
                                type="submit"
                                onClick={onCancelClick}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Cancle
                            </button>
                            <button
                                type="submit"
                                onClick={onRegisterClick}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Modify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );

}

export default ModifyPersonal;