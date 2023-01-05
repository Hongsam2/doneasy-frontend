import SelectSignUp from "./SelectSignUp";
import axios from 'axios';
import React, { useState, useEffect ,Component } from "react";
import PopUpInstroductionDom from "../dom/PopUpInstroductionDom";
import PopupDom from "../dom/PopUpInstroductionDom"



function ModifyOrganization (){

    const [OrganizationID, setOrganizationID] = useState('');
    const [OrganizationNickname, setOrganizationNickname] = useState('');
    const [OrganizationPw, setOrganizationPw] = useState('');
    const [OrganizationPwC, setOrganizationPwC] = useState('');
    const [OrganizationMail, setOrganizationMail] = useState('');
    const [OrganizationPN, setOrganizationPN] = useState('');
    const [OrganizationZipcode, setOrganizationZipcode] = useState('');
    const [OrganizationAddress, setOrganizationAddress] = useState('');
    const [OrganizationAccount, setOrganizationAccount] = useState('');
    const [OrganizationBack, setOrganizationBank] = useState('');
    const [OrganizaionInstroduction, setOrganizationInstroduction] = useState('');
    const [image, setImage] = useState([]);
    const [imageSrc, setImageSrc] = useState([]);
    const [imageLoading, setImageLoading] = useState(false);
    const [index, setIndex] = useState(0)

    const onCancelClick = () =>{
        window.location.href ='/';
    };
    const onOrganizationIdChange = (e) =>{
        setOrganizationID(e.target.value);
    }
    const onOrganizationNicknameChange = (e) =>{
        setOrganizationNickname(e.target.value)
    }
    const onOrganizationPwChange = (e) =>{
        setOrganizationPw(e.target.value)
    }
    const onOrganizationPwCChange = (e) =>{
        setOrganizationPwC(e.target.value)
    }
    const onOrganizationmailChange = (e) =>{
        setOrganizationMail(e.target.value)
    }
    const onOrganizationPNChange = (e) =>{
        setOrganizationPN(e.target.value)
    }
    const onOrganizationAddressChange = (e) =>{
        setOrganizationAddress(e.target.value)
    }
    const onOrganizationZipCodeChange = (e) =>{
        setOrganizationZipcode(e.target.value)
    }
    const onOrganizationBankChange = (e) =>{
        setOrganizationBank(e.target.value)
    }
    const onOrganizationAccountChange = (e) =>{
        setOrganizationAccount(e.target.value)
    }
    const onOrganizationInstroductionChange = (e) =>{
        setOrganizationInstroduction(e.target.value)
    }

    const onRegisterClick = () =>{
        if (!checkPW()){
            return;
        }
        
        const formData = new FormData();
        formData.append('organization_id', OrganizationID)
        formData.append('password', OrganizationPw)
        formData.append('email', OrganizationMail)
        formData.append('nickname', OrganizationNickname)
        formData.append('phone_number', OrganizationPN)
        formData.append('introduction',OrganizaionInstroduction)
        formData.append('zipcode', OrganizationZipcode)
        formData.append('address', OrganizationAddress)
        formData.append('account',OrganizationAccount)
        formData.append('bank',OrganizationBack)
        formData.append('image_name', image)
        
       
        axios
        .post('http://localhost:8080/organization/save', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        
    };
    const onImageChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
        setIndex(index + 1);
        return new Promise((resolve) => {
            reader.onload = () => {
                const src = [...imageSrc];
                src.push(reader.result);
                setImageSrc(src);
                setImageLoading(true);
                resolve();
            };
        });
    };

 

    const checkPW = () => {
        if (OrganizationPw === OrganizationPwC){
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
                                    value={OrganizationID}
                                    onChange={onOrganizationIdChange}
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
                                        value={OrganizationNickname}
                                        onChange={onOrganizationNicknameChange}
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
                                    value={OrganizationMail}
                                    onChange={onOrganizationmailChange}
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
                                    value={OrganizationPN}
                                    onChange={onOrganizationPNChange}
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
                                    value={OrganizationPw}
                                    onChange={onOrganizationPwChange}
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
                                    value={OrganizationPwC}
                                    onChange={onOrganizationPwCChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Zipcode
                        <button
                                type="submit"
                                onClick={onCancelClick}
                                className="inline-flex items-center px-3 py-1 ml-5 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-[#77c577] border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                우편번호 검색
                            </button>
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={OrganizationZipcode}
                                    onChange={onOrganizationZipCodeChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Address
                            </label>
                        <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={OrganizationAddress}
                                    onChange={onOrganizationAddressChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Bank
                            </label>
                        <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={OrganizationBack}
                                    onChange={onOrganizationBankChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Account
                            </label>
                        <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={OrganizationAccount}
                                    onChange={onOrganizationAccountChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Instroduction
                                <button
                                type="button"
                                //onClick={this.openPopup}
                                className="inline-flex items-center px-3 py-1 ml-5 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-[#77c577] border border-transparent rounded-md active:bg-gray-900 false"
                                >
                                소개글 작성
                            </button>
                                
                            </label>
                        <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={OrganizaionInstroduction}
                                    onChange={onOrganizationInstroductionChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Logo
                            <label
                        htmlFor="imgInput"
                        className="inline-flex items-center px-3 py-1 ml-5 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-[#77c577] border border-transparent rounded-md active:bg-gray-900 false hover:cursor-pointer "
                    >
                        Select logo
                    </label>
                            </label>
                    <input
                        type="file"
                        id="imgInput"
                        hidden
                        accept="image/*"
                        onChange={onImageChange}
                    />
                    {imageLoading && (
                        <img src={imageSrc[imageSrc.length - 1]} alt="img" />
                    )}
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

export default ModifyOrganization;