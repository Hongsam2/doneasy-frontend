import axios from "axios";
import GroupIntro from "../../components/3indy/GroupIntro";
import { useEffect, useState } from "react";
import ProjectList from "../../components/3indy/ProjectList"

function GroupPage() {

    const [groupName, setGroupName] = useState('');
    const [activeCount, setEctiveCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    const [projectList, setProjectList] = useState([]);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [image, setImage] = useState('');

    useEffect(()=> {
        axios.get("http://localhost:8080/organization/detail")
    .then((response)=> {
        console.log(response.data)
        setGroupName(response.data.nickname)
        setEctiveCount(response.data.activeCount)
        setDoneCount(response.data.doneCount)
        setProjectList(response.data.projectListDtoList)

        setAddress(response.data.address)
        setEmail(response.data.email)
        setPhoneNumber(response.data.phone_number)
        setIntroduction(response.data.introduction)
        setZipcode(response.data.zipcode)
        setImage(response.data.image)

        

    }).catch((error)=> {
        console.log(error)
    })

    }, [])

    return(
        <>
        <div className="bg-gray-50 py-12">
        <div className="bg-white border shadow-md mx-auto mt-12 mb-12 rounded-2xl w-1/2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 ">
                <img alt='프로필' src={`data:image/*;base64,${image}`}
                className="h-20 w-20 rounded-full mx-8 mt-8"></img>
                <div className='text-2xl font-extrabold text-center mt-14'>반가워요, </div>
                <div className='text-2xl text-center mt-14'>{groupName}!</div>
            </ul>
            <div className="mx-12 mt-2">
                <button type="button" 
                className="border rounded-full h-6 w-12 bg-gray-100 text-xs"
                >수정
                </button>
            </div>

            <GroupIntro 
            groupName = {groupName}
            introduction = {introduction}
            address = {address}
            zipcode = {zipcode}
            phoneNumber = {phoneNumber}
            email = {email}
            image = {image}/>

            <div className="border mx-auto mt-6 mb-6 rounded-2xl w-11/12">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 w-11/12 mx-auto justify-between">
            <div className="mt-8 mb-8">
                <div className="text-2xl font-bold">기부 활동</div>
                <div className="mt-6 ">총 주최 횟수</div>
                <div className="text-3xl font-extrabold text-green-600">{activeCount+doneCount}회</div>
            </div>

                <div className=" mx-8 mt-24">
                <li>
                    <span>주최중</span>
                    <span> {activeCount}회</span>
                </li>
                <li>
                    <span>주최완료</span>
                    <span> {doneCount}회</span>
                </li>
                </div>
            </ul>
            
            <div className=" w-11/12 border-t-2 mx-auto mb-6">
            <table className="mx-auto">
            <tbody>
                    {projectList.map((value, index) => {
                        return (
                            <ProjectList projectList= {value} 
                            key={index}/>
                        )
                    })}
                    </tbody>
            </table>
            </div>
            </div>

            



            <div className="text-center mb-6 mt-12">
            <button type="button" className="underline text-gray-300 text-sm">회원 탈퇴</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default GroupPage;